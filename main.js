function caesarEncrypt(msg, shift) {
    const charCodes = [];
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0));
    }
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + shift;
    }
    let result = "";
    for (let i = 0; i < charCodes.length; i++) {
        result += String.fromCharCode(charCodes[i]);
    }
    return result;
}

function caesarDecrypt(msg, shift) {
    const charCodes = [];
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0));
    }
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] - shift;
    }
    let result = "";
    for (let i = 0; i < charCodes.length; i++) {
        result += String.fromCharCode(charCodes[i]);
    }
    return result;
}

const encryptedMsg = caesarEncrypt("Benjamin", 2);
const decryptedMsg = caesarDecrypt(encryptedMsg, 2);

console.log("encrypted: " + encryptedMsg);
console.log("decrypted: " + decryptedMsg);