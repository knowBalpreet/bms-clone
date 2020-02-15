import axios from 'axios';

const request = ({ method = 'get', url, data = {} }: any) =>
  // @ts-ignore
  axios({
    method,
    url,
    data,
    timeout: 30000,
  });

export default request;
