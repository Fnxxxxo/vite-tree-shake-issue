/**
 * Created by Jaron Long on 2023/10/23
 */

import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import Hex from 'crypto-js/enc-hex';
import ECB from 'crypto-js/mode-ecb';
import Pkcs7 from 'crypto-js/pad-pkcs7';

export const unusedFn = (msg: string, key: string) => {
  const encrypted = AES.encrypt(msg, Utf8.parse(key), {
    mode: ECB,
    padding: Pkcs7,
  });
  return encrypted.ciphertext.toString(Hex);
};
