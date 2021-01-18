import { caesarEncrypt, caesarDecrypt } from './diycrypto.js';

const encryptedMsg = caesarEncrypt("ILOVEYOULISA", 2);
const decryptedMsg = caesarDecrypt(encryptedMsg, 2);

console.log("encrypted: " + encryptedMsg);
console.log("decrypted: " + decryptedMsg);