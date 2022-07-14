import Cryptr from 'cryptr';

const crypt = new Cryptr('myCryptCr3d3nt14L');

export const cryptEnc = (value) => {
  const result = crypt.encrypt(value);

  return result;
};

export const cryptDec = (value) => {
  const result = crypt.decrypt(value);

  return result;
};

export const cryptPass = (value, key) => {
  const cryptKey = new Cryptr(key);

  const result = cryptKey.decrypt(value);

  return result;
};
