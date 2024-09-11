const crypto = require("crypto");

// defining some things for the encryption algorithm
const algo = "aes-256-cbc";
const secretKey = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// main encryption function
async function encrypt(plainText) {
  return new Promise((resolve, reject) => {
    try {
      const cipher = crypto.createCipheriv(algo, secretKey, iv); // creates the cipher
      let encrypted = cipher.update(plainText, "utf-8", "hex"); // encrypts the text
      encrypted += cipher.final("hex");

      resolve(encrypted); // resolved the promise with the encrypted text
    } catch {
      reject(err); // reject the promise if an error occured
    }
  });
}

// for development only
const plainText = "this is a plain text";

// driver function that starts the main encryption process

async function runEncryption() {
  try {
    const encryptedText = await encrypt(plainText);

    console.log("Encrypted text", encryptedText);
  } catch (err) {
    console.log("Encryption error occured", err);
  }
}

runEncryption();
