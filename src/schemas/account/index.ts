import {Schema} from "mongoose";

const accountSchema = new Schema({ 
    _id:String,
    password:String,
    name:String,
    lastname:String,
    email:{type:String, unique:true},
    createDate: Date,

}, { collection: 'accounts' });

export default accountSchema;