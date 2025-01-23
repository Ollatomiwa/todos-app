const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema ({
    firstName: String,
    lastName: String,
    username: {type:String, required: true},
    password: {type: String, required: true}
});

//registering the password and hashing it//
userSchema.pre("save", async function (next){ // the .pre method allows us do some operations before saving anything, like hashing a password//
    const user = this;
    if (!user.isModified) return next(); // this check if the user is new//
    // we are generating a salt,a salt is a random value added to the password before hashing//
    let salt = await bcrypt.genSalt(10);
    let  hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next(); // go to the next operation//
});

// Method to check the password matched from the hashed passwords in the db while user logs in.//
userSchema.methods.comparePassword = async function(password){
     return bcrypt.compare(password, this.password);
}

const User = mongoose.model("User",userSchema);

module.exports = User;