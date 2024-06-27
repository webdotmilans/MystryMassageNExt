// import {z} from 'zod'

// export const usernameVallidation =z
//     .string()
//     .min(2, "Username must be atleast 2 character")
//     .max(20, "Username must be no more than 20")
//     .regex(/^[A-Za-z0-9_]+$/, "Username must not contain special character")

//     export const signUpSchema =z.object({
//         username:usernameVallidation,
//         email:z.string().email({message:'Invalid email adrress'}),
//         password:z.string().min(6,{message:"Password must be atleast 6 characters"})
//     })
    
import { z } from 'zod';

// Username validation
export const usernameValidation = z
  .string()
  .min(2, { message: "Username must be at least 2 characters long" })
  .max(20, { message: "Username must be no more than 20 characters long" })
  .regex(/^[A-Za-z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" });

// Email validation
const emailValidation = z
  .string()
  .email({ message: "Invalid email address" });

// Password validation
const passwordValidation = z
  .string()
  .min(6, { message: "Password must be at least 6 characters long" })
  .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  .regex(/[0-9]/, { message: "Password must contain at least one number" });

export const signUpSchema = z.object({
  username: usernameValidation,
  email: emailValidation,
  password: passwordValidation,
});
