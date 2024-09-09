const mongoose = require('mongoose');

const uri = 'mongodb+srv://jpmalbas4:Y6p3D3EqeGFPczdI@cluster0.7nsvk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology :  true
})
.then(() => console.log('mongoDB connected'))
.catch(() => console.error('Connection error', err));