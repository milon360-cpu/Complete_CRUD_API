const userSchema = require('../Models/Model');

// create new user 
exports.createNewUser = async (req,res)=>
{
    const username = req.body.username;
    const email =  req.body.email;
    const phone = req.body.phone
    try 
    {
        const newUser = new userSchema
        (
            {
                username,
                email,
                phone
            }
        )
        await newUser.save();
        res.status(201).send 
        (
            {
                    success : true,
                    message: "Create new user",
                    status : 201,
                    data : newUser
            }
        )
    }
     catch (error)
    {
        res.status(500).send 
        (
            {
                success : false,
                message : error.message,
                status : 500
            }
        )
        
    }
}

// find the single user 
exports.findSingleUser = async (req,res)=>
{
    const username = req.params.username;
    try 
    {
        const user = await userSchema.findOne({username:username});
        if(user)
        {
            res.status(200).send 
            (
                {
                  success : true,
                  message : "User is Found",
                  data:user,
                  status : 200
                }
            )
        }
        else 
        {
            res.status(500).send 
            (
                {
                    success : false,
                    message : "User not found with this id",
                    username: username,
                    status: 500
                }
            )
        }
    } 
    catch (error) 
    {
        res.status(500).send 
        (
            {
                success : false,
                message : error.message,
                status:500
            }
        )
    }   
}

// find the all user 
exports.findAllUser = async(req,res)=>
{
    try 
    {
        const user = await userSchema.find().select(
            {
                _id:0
            }
        );
        if(user)
        {
            res.status(200).send 
            (
                {
                  success : true,
                  message : "User is Found",
                  data:user,
                  status : 200
                }
            )
        }
        else 
        {
            res.status(500).send 
            (
                {
                    success : false,
                    message : "User not found",
                    status: 500
                }
            )
        }
    } 
    catch (error) 
    {
        res.status(500).send 
        (
            {
                success : false,
                message : error.message,
                status:500
            }
        )
        
    }   
}

// delete single user 
exports.deleteSingleUser = async (req,res)=>
{
    const username = req.params.username;
    try 
    {
        const user = await userSchema.findOneAndDelete({username:username}).select(
            {
                _id:0
            }
        );
        if(user)
        {
            res.status(200).send 
            (
                {
                  success : true,
                  message : "Successfully Delete Single User",
                  data:user,
                  status : 200
                }
            )
        }
        else 
        {
            res.status(500).send 
            (
                {
                    success : false,
                    message : "User not found with this username",
                    status: 500
                }
            )
        }
    } 
    catch (error) 
    {
        res.status(500).send 
        (
            {
                success : false,
                message : error.message,
                status:500
            }
        )
    }
}

// update user info 
exports.updateUserInfo = async(req,res)=>
{
    const username = req.params.username;
    try 
    {
        const updatedUser = await userSchema.findOneAndUpdate
        (
            {username:username},
            {
                $set :
                {
                    email: req.body.email,
                    phone : req.body.phone
                }
            },
            {new:true}
        ).select
        (
            {
                _id:0
            }
        )
        if(updatedUser)
        {
            res.status(200).send 
            (
                {
                    success : true,
                    message : "Update Successful",
                    updatedData : updatedUser,
                    status : 200
                }
            )
        }
        else 
        {
            res.status(500).send 
            (
                {
                    success : false,
                    message : "User not found with this username",
                    username : username,
                    status : 500
                }
            )
        }
    } 
    catch (error)
    {
        res.status(500).send 
        (
            {
                success : false,
                message : error.message,
                status:500
            }
        )
    }
}