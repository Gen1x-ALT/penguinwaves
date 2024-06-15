import axios from 'axios';
import qs from 'qs';

const data = qs.stringify({
  grant_type: 'client_credentials',
  client_id: process.env.ACCOUNT_CLIENT_ID, // Replace with actual client ID if not using environment variables
  client_secret: 'YOUR_CLIENT_SECRET', // Replace with your actual client secret
  audience: `https://${process.env.ACCOUNT_NAMESPACE}/api/v2/`
});

const config = {
  method: 'post',
  url: `https://${process.env.ACCOUNT_NAMESPACE}/oauth/token`,
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: data
};

axios(config)
  .then(response => {
    res.status(200).json(response.data);
  })
  .catch(error => {
    res.status(500).json({ message: 'Server error' });
    console.error(error);
  });