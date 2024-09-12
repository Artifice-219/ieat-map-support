
function get_secrets(){

    const hardcoded_secretKey = Buffer.from('f3a2a527d4b1f2b5b03e7392f2f564a18b3ff537f6cf5a6b743278373a80f1f3', 'hex');
    const hardcoded_iv = Buffer.from('b4f1c9937d6a4d5a1b2e3c4f5a6d7e8f', 'hex');

    return{ hardcoded_secretKey, hardcoded_iv };
};

module.exports = { get_secrets };