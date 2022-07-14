import axios from 'axios';

const cubecode = axios.create({
  baseURL: 'http://192.168.1.101:3334/api'
});

export default cubecode;
