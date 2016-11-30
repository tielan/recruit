
const HOST = 'http://apis.baidu.com/';

export const request = (url, method, body,headers) => {
  let isOk;
  return new Promise((resolve, reject) => {
    fetch(HOST + url, {
      method,
      headers,
      body
    })
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }
        return response.json();
      })
      .then((responseData) => {
        if (isOk) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
