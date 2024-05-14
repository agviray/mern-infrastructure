import * as usersAPI from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export function getToken() {
  const token = localStorage.getItem('token');
  // If no token exists, return null.
  if (!token) {
    return null;
  }

  // Get the payload of the token.
  const payload = JSON.parse(atob(token.split('.')[1]));

  // If token expired, remove it from localStorage.
  // - Note: A JWT's exp is expressed in seconds, not milliseconds. Therefore, need to convert.
  if (payload.exp * 1000 < Date.now()) {
    localStorage.remoteItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // Return user in the token payuload if token exists, otherwise return null.
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
  localStorage.removeItem('token');
}
