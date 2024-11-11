async function check_email(email_input){
    // regex expressiont to check for a valid email
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    try{
        // wrapping the regex text on a promise
        // execution is halted until this promise is fulfilled
        const is_valid = await new Promise((resolve, reject) => {
            try{
                resolve(regex.test(String(email_input).toLowerCase()));
            }
            catch(e){
                reject(e)
            }
        });

        console.log(is_valid)
        // this function is a promise so therefore it must return a promise
        return is_valid
    }
    catch(e){
        console.log(`An error occured while checking for a valid email ${e}`)
    }
}

// console.log(check_email(email))