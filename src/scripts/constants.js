export const API_BASE_URL = "https://tamagochi-server.herokuapp.com";

export const ACCESS_TOKEN = "accessToken";
export const OAUTH2_REDIRECT_URI = "http://localhost:3000/oauth2/redirect";
export const OAUTH2_REDIRECT_URI_PROD =
  "https://tamagotchi-web.herokuapp.com/oauth2/redirect";
export const GOOGLE_AUTH_URL =
  API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;

export const FACEBOOK_AUTH_URL_PROD = `${API_BASE_URL}/oauth2/authorize/facebook?redirect_uri=${OAUTH2_REDIRECT_URI_PROD}`;
export const FACEBOOK_AUTH_URL =
  API_BASE_URL +
  "/oauth2/authorize/facebook?redirect_uri=" +
  OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL =
  API_BASE_URL + "/oauth2/authorize/github?redirect_uri=" + OAUTH2_REDIRECT_URI;
