import mongoose from "mongoose"


type ConnectionObject={
    isConnected?: number
}


const connection: ConnectionObject = {}
//database connection

async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("Already Connected to Databse")
        return
    }

    try {
        const db = await mongoose.connect(process.env.
        MONGODB_URI || '',{})
    
        connection.isConnected = db.connections[0].
        readyState

        console.log("DB Connected Succesfully")
        
    } catch (error) {
        console.log("Database connection failed",error);
        process.exit()
        
    }
}

export default dbConnect;