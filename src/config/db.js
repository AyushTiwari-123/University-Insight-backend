import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

const connectDB = async ()=>{
 try {
    const connectionInstance= await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log(`\n MngoDb connected !! DB HOST: ${connectionInstance.connection.host}`);  //pura mongodb ka url h jha pe connection ho rha h yo lele kyuki hme pta rhe kon se host pe hm connect ho rhe h
 } catch (error) {
    console.log("MONGODB connection error ", error);
    process.exit(1)
 }
}
export default connectDB