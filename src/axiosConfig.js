import axios from 'axios';

let token = null;
const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)jwtoken\s*=\s*([^;]*).*$)|^.*$/, '$1');
if (cookieValue) {
  token = cookieValue;
}

const headers = token ? { 'jwtoken': token } : {};

const instance = axios.create({
  baseURL: 'https://cookie-4l95.onrender.com',
  headers: {
    'jwtoken':document.cookie.replace(/(?:(?:^|.*;\s*)jwtoken\s*=\s*([^;]*).*$)|^.*$/, '$1')
  }
});

export default instance;
// import axios from 'axios';

// const getCookieValue = (name) => {
//   const matches = document.cookie.match(new RegExp(name + '=([^;]+)'));
//   return matches ? matches[1] : null;
// };

// const jwtoken = getCookieValue('jwtoken');
// const instance = axios.create({
//   baseURL: 'http://localhost:3000',
//   headers: {
//     'jwtoken': jwtoken
//   }
// });

// export default instance;
