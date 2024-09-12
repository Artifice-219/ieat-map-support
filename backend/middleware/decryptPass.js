const { get_secrets} = require('../config/secrets/passcode.js')

const crypto = require('crypto');

// defining some things for the encryption
const{ hardcoded_secretKey, hardcoded_iv } = get_secrets();

const secretKey = hardcoded_secretKey;
const iv = hardcoded_iv;
const algo = 'aes-256-cbc';


// main decryption function
// this will not work if you cant provide the same secretKey and iv used in the encryption process
async function decrypt(encryptedText, secretKey){
    return new Promise((resolve, reject) =>{
        try{
            const decipher = crypto.createDecipheriv(algo, secretKey, iv);
            let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
            decrypted += decipher.final('utf-8');
            
            resolve(decrypted); // resolved the promise

        }catch(err){

            reject(err);

        }
    });
}

// plain text should be : this is a plain text

const encryptedText = 'ee855e398a5e96acd68590f79f08e8cd383728698863d345ecd72b5d03577e52';

async function runDecryption(){
    try{
        const decryptedText = await decrypt(encryptedText, secretKey);

        console.log(`Decrypted text :  ${decryptedText}`);

    }catch(err){
        console.log('An error occured while encrypting', err)
    }
}

runDecryption();