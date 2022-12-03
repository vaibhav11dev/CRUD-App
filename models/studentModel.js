import mongoose from 'mongoose'
import { stringify } from 'querystring'

//Create Schema
const studentSchema = new mongoose.Schema({
    name: { type:String, require:true, trim:true },
    age: { type:Number, require:true, min:18, max:65 },
    fees: { type:mongoose.Decimal128, require:true, validate: (value) => value >= 5000 }
})

//Create Model
const studentModel = mongoose.model('student', studentSchema)

export default studentModel