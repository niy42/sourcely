import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import crypto from 'crypto';
import Subscriber from '@/models/Subscriber';
import { testConnection } from '@/lib/sequelize';

// Mailchimp Config
const API_KEY = process.env.MAILCHIMP_API_KEY!;
const LIST_ID = process.env.MAILCHIMP_LIST_ID!;
const DATACENTER = process.env.MAILCHIMP_DC!;
const REPLY_EMAIL = process.env.REPLY_EMAIL!;
const MANDRILL_API_KEY = process.env.MANDRILL_API_KEY!;

if (!API_KEY || !LIST_ID || !DATACENTER || !REPLY_EMAIL || !MANDRILL_API_KEY) {
    throw new Error('Missing required environment variables');
}

const getSubscriberHash = (email: string) => {
    return crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { email, name } = req.body;

        // Validation: Check if email and name are provided
        if (!email || !name) {
            return res.status(400).json({ success: false, message: 'Email and name are required' });
        }

        // Test the database connection
        await testConnection();

        // Check if the email is already subscribed
        const subscriberHash = getSubscriberHash(email);
        const checkUrl = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${subscriberHash}`;

        try {
            await axios.get(checkUrl, {
                headers: {
                    Authorization: `apikey ${API_KEY}`,
                },
            });
            return res.status(409).json({ success: false, message: 'This email is already subscribed' });
        } catch (getError: any) {
            if (getError.response?.status === 404) {
                // Email not found, proceed with subscription
                await Subscriber.sync();
                await Subscriber.create({ email, name });

                // Mailchimp API request to subscribe the email
                const data = {
                    email_address: email,
                    status: 'subscribed',
                    merge_fields: {
                        FNAME: name,
                    },
                };
                const subscribeUrl = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
                const response = await axios.post(subscribeUrl, data, {
                    headers: {
                        Authorization: `apikey ${API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 200) {
                    // Send Transactional Email using Mandrill directly with axios
                    const mandrillRequest = {
                        key: MANDRILL_API_KEY,
                        message: {
                            from_email: REPLY_EMAIL,
                            to: [{ email: email, type: 'to' }],
                            subject: 'Welcome to my newsletter!',
                            html: `<html><body><h1>Welcome, ${name}!</h1><p>Thank you for subscribing to our newsletter.</p></body></html>`,
                        },
                        async: false,  // Ensure the call is synchronous
                        ip_pool: 'Main Pool',
                    };

                    try {
                        const mandrillResponse = await axios.post('https://mandrillapp.com/api/1.0/messages/send.json', mandrillRequest);
                        console.log('Mandrill response:', mandrillResponse.data);

                        if (mandrillResponse.status === 200 && mandrillResponse.data && mandrillResponse.data[0].status === 'sent') {
                            console.log("Message status: " + mandrillResponse.data[0].status);
                            return res.status(200).json({ success: true, message: 'Subscription successful and welcome email sent' });
                        } else {
                            console.error('Failed to send transactional email:', mandrillResponse.data);
                            return res.status(500).json({ success: false, message: 'Failed to send transactional email' });
                        }
                    } catch (error) {
                        console.error('Error sending email with Mandrill:', error);
                        return res.status(500).json({ success: false, message: 'Internal Server Error' });
                    }

                } else {
                    return res.status(response.status).json({ success: false, message: 'Failed to subscribe' });
                }
            } else {
                throw getError;
            }
        }
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}
