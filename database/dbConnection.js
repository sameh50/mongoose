import mongoose, { Model, Schema } from 'mongoose'
export const dbconnection= mongoose.connect('mongodb://127.0.0.1:27017/mongoose').then(()=>{
    console.log('db connected success');
}).catch(()=>{

    'db connection faild'
});