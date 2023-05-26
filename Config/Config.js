const mongoose = require('mongoose');
const url = process.env.URL;


mongoose.connect(url)
.then(()=>
{
    console.log("DB is connected");
})
.catch((error)=>
{
    if(error)
    {
        console.log(`DB is not connected ${error}`);
        process.exit();
    }
})