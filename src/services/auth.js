import { cryptEnc, cryptDec } from './crypt';

export const TOKEN_KEY = '@secretme-Token';
export const TOKEN_ID = '@id-Token';
export const TOKEN_NAME = '@name-Token';
export const TOKEN_AREA = '@area-Token';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getTokenValue = () => {
  const value = localStorage.getItem(TOKEN_KEY);

  const result = cryptDec(value);

  return result;
};

export const login = async (token, name, area, id) => {
  await localStorage.setItem(TOKEN_KEY, cryptEnc(token));
  await localStorage.setItem(TOKEN_NAME, name);
  await localStorage.setItem(TOKEN_AREA, area);
  await localStorage.setItem(TOKEN_ID, id);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_ID);
  localStorage.removeItem(TOKEN_NAME);
  localStorage.removeItem(TOKEN_AREA);
};
