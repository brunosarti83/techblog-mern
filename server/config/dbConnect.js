const mongoose = require('mongoose');
// define connection foo
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongo_db connection succesfull')
    } catch (err) {
        console.log('mongo_db connection failed')
        console.log(err)
    }
}
// inmediately excecute foo 
dbConnect();