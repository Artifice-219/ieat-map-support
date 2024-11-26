function fetchPractice(){

    try{
        const email = 'kamote@gmail.com';
        fetch(`http://localhost:3000/user?email=${email}`)
        .then(
            res => res.json()
        )
        .then(d => {
            console.log(d)
            return d
        })
    }catch(error){
        console.error(`An error occured ${error}`)
    }

}


fetchPractice()