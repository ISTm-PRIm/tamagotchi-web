import cookie from "react-cookies";
import { URL_HOST } from "../content/const";
// PROXY: https://tamagochi-server.herokuapp.com/
// const URL_ENV = `${URL_HOST}/services/rest/`;
// const LOGIN_URL = `${URL_HOST}/services/login`;
const URL_ENV = `/wylsa-admin/api/`;
const LOGIN_URL = `/wylsa-admin/api/auth/login`;
const URL = URL_ENV;

const buildHeaders = (token, method, isFile = false) => {
  let headers = {
    Accept: "application/json",
    "cache-control": "no-cache",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": method
  };
  if (!isFile) {
    headers = {
      ...headers,
      "Content-Type": "application/json"
    };
  }

  if (!token) {
    return headers;
  }

  return {
    ...headers,
    Authorization: token
  };
};

export const buildBody = data => {
  if (!data) {
    return null;
  }
  let formBody = [];
  for (let property in data) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }

  return formBody.join("&");
};

const apiRequestWithBody = async (method, url, data, token = null) => {
  return await fetch(url, {
    method,
    headers: buildHeaders(token, method),
    body: JSON.stringify(data)
  })
    .then(function(response) {
      if (response.status !== 200) {
        return {
          error: true,
          code: response.status,
          message: response.status
        };
      } else {
        return Promise.resolve(response);
      }
    })
    .then(res => {
      if (res.error) {
        return res;
      } else {
        return res.json();
      }
    })
    .then(function(data) {
      return data;
    });
  // .catch(response => {
  //   return { error: true, message: response };
  // });
};

const apiRequest = async (method, url, token = null) => {
  return await fetch(url, {
    method,
    headers: buildHeaders(token, method)
  })
    .then(function(response) {
      if (response.status !== 200) {
        return {
          error: response.status,
          message: `Ошибка ${response.status} - ${response.statusText}`
        };
      } else {
        return Promise.resolve(response);
      }
    })
    .then(res => res.json())
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      return { error: true, message: error };
    });
};

// Authentication Controller
export const login = async data => {
  const datas = await apiRequestWithBody("POST", LOGIN_URL, data);
  if (datas.error) {
    return datas;
  }

  const profile = await apiRequest(
    "GET",
    `${URL}admin-users/current`,
    datas.accessToken
  );

  cookie.save(
    "token",
    { token: datas.accessToken, profile: profile },
    { path: "/" }
  );

  return { error: false };
};

// Create a pet
export const createPet = async data => {
  return await apiRequestWithBody("POST", `${URL}pet/create`, data);
};

// export const getUserData = async token => {
//   return await apiRequest("GET", `${URL}public/reset-password/${token}`);
// };

// export const resetPassword = async (token, data) => {
//   return await apiRequestWithBody(
//     "PUT",
//     `${URL}public/reset-password/${token}`,
//     data
//   );
// };

// export const instagramPostDelete = async data => {
//   await apiRequest(
//     "DELETE",
//     `${URL}instagramPost?sourceUrl=${data}`,
//     cookie.load("token").token
//   );
// };
