import axios from "axios";

const dermaster_url = '/apis';

export const authLogin = (body) => {
  return axios.post(`${dermaster_url}/auth/login`, body);
}

export const getQueue = (token, filter, order, page, take) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/queue?filter=${filter}&order=${order}&page=${page}&take=${take}`, config);
}

export const getCurrentQueue = (token, clinicId, type) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/queue/current?clinicId=${clinicId}&type=${type}`, config);
}

export const getQueueById = (token, id) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/queue/${id}`, config);
}

export const addCurrentQueue = (token, body) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.post(`${dermaster_url}/queue`, body, config);
}

export const deleteQueue = (token, id) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.delete(`${dermaster_url}/queue/${id}`, config);
}

export const searchCustomer = (token, filter) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/customer?filter=${filter}`, config);
}

export const getCustomerById = (token, id) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/customer/${id}`, config);
}

export const addCustomer = (token, body) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.post(`${dermaster_url}/customer`, body, config);
}

export const editCustomer = (token, id, body) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.put(`${dermaster_url}/customer/${id}`, body, config);
}

export const getCountry = (token) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/country?order=asc&page=1&take=1000`, config);
}

export const getProvince = (token, countryId) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/province/findByCountry?countryId=${countryId}&order=asc&page=1&take=1000`, config);
}

export const getRegency = (token, countryId, provinceId) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/regency/findByProvince?countryId=${countryId}&provinceId=${provinceId}&order=asc&page=1&take=1000`, config);
}

export const getDashboard = (token, type) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/dashboard/${type}`, config);
}

export const getAdmission = (token) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/admission?order=asc&page=1&take=10`, config);
}

export const getAdmissionById = (token, id) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/admission/${id}`, config);
}

export const addAdmission = (token, body) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.post(`${dermaster_url}/admission`, body, config);
}

export const editAdmission = (token, id, body) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.put(`${dermaster_url}/admission/${id}`, body, config);
}

export const getDoctors = (token) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.get(`${dermaster_url}/doctor`, config);
}

export const createCall = (token, body, target) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  return axios.post(`${dermaster_url}/${target}`, body, config);
}


