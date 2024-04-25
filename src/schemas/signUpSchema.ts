import {z} from 'zod'

export const usernameVallidation =z
    .string()
    .min(2, "Username must be atleast 2 character")
    .max(20, "Username must be no more than 20")
    .regex(/^[A-Za-z0-9_]+$/, "Username must not contain special character")

    export const signUpSchema =z.object({
        username:usernameVallidation,
        email:z.string().email({message:'Invalid email adrress'}),
        password:z.string().min(6,{message:"Password must be atleast 6 characters"})
    })
    
