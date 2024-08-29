async function get_time(){

    let promise = new Promise(function(resolve, reject){

        const now = new Date();
        let current_hour = now.getHours();
        let current_min = now.getMinutes();

        // formatting to a 12 hour format
        const formatted_time = now.toLocaleTimeString('en-US',{
            hour12 : true,
            hour : 'numeric',
            minutes : 'numeric',
            second : 'numeric'
        })

        // adjust hour to a 12 hour format
        current_hour = current_hour % 12 || 12;

        resolve({formatted_time, current_hour, current_min});
    });

    const{ formatted_time, current_hour, current_min} = await promise;

    console.log(`Current time is ${current_hour} : ${current_min}`);
}

get_time();