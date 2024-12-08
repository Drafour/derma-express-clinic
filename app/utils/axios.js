import axios from "axios";

const dermaster_url = 'http://103.224.100.38:8001/v1';

export const authLogin = (body) => {
  return axios.post(`${dermaster_url}/auth/login`, body);
}

export const getQueue = (token, order, page, take) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/queue?order=${order}&page=${page}&take=${take}`, config);
}

export const addQueue = (token, body) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.post(`${dermaster_url}/queue`, body, config);
}

export const getAdmission = (token, order, page, take) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/admission?order=${order}&page=${page}&take=${take}`, config);
}

export const getCustomer = (token, order, page, take) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/customer?order=${order}&page=${page}&take=${take}`, config);
}

export const addCustomer = (token, body) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.post(`${dermaster_url}/customer`, body, config);
}

