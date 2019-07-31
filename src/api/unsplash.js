import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 24c18638fb9b8b209e5409f01521ad6be190a79537ba7ce98be50eed166c46f8'
  }
});