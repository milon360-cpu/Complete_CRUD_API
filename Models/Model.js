const mongoose = require("mongoose");

const userSchema = mongoose.Schema
(
    {
        username:
        {
            type : String,
            required :[true,"Name is required"],
            unique : true,
            trim : true,
            validate:
            {
                validator: (v)=>
                {
                    return 
                }
            }
        },
        email:
        {
            type : String,
            required : [true, "email is required"],
            unique : true,
            trim : true,
            validate:
            {
                validator: (v)=>
                {
                    const validEmailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                    return validEmailExpression.test(v)
                },
                message:(props)=> `${props.value} is not a valid email`
            }
        },
        phone:
        {
            type : String,
            required: [true,"Phone number is required"],
            trim : true,
            validate:
            {
                validator: (v)=>
                {
                    const validPhoneExpression = /\d{3}-\d{3}-\d{4}/;
                    return validPhoneExpression.test(v);
                },
                Message:(props)=>`${props.value} is not a valid number `
            }
        },
        createdOn:
        {
            type : Date,
            default : Date.now
        }
    },
   
)

module.exports = mongoose.model("userSchema",userSchema);