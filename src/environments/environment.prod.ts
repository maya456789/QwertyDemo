const SERVER_URL='http://localhost:8080/api/auth';


export const environment = {
  production: true,

  API_AUTHENTICATE_LOGIN:`${SERVER_URL}/signin`,
  API_REGISTRATION:`${SERVER_URL}/signup`
};
