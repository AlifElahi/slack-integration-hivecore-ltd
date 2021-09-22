const configuration = {
  client_id: 'f64jr3ztvz2Szb9qutuHEL9hTcDMl6hHGP4lh0lz',
  redirect_uri: 'http://localhost:3000/authentication/callback',
  response_type: 'code',
  post_logout_redirect_uri: 'http://localhost:3000/',
  scope: 'openid ',
  authority: 'https://sso.hivecorelimited.com',
  silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback',
  automaticSilentRenew: true,
  loadUserInfo: true,
  revokeAccessTokenOnSignout:true
};

export default configuration;
