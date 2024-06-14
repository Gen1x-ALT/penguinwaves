// pages/api/getToken.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const options = {
        method: 'POST',
        url: 'https://dev-shvzsx4icizctmai.us.auth0.com/api/v2/oauth/token',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: process.env.AUTH0_CLIENT_ID,
          client_secret: process.env.AUTH0_CLIENT_SECRET,
          audience: 'https://dev-shvzsx4icizctmai.us.auth0.com/api/v2/'
        })
      };

      const response = await axios(options);
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(error.response?.status || 500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}