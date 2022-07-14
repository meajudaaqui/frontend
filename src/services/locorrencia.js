import axios from 'axios';

const locorrencia = axios.create({
  baseURL: 'http://192.168.1.101:3333/api'
});

export default locorrencia;
