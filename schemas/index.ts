import * as z from "zod";
export const LoginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const RegisterSchema = z.object({
  firstName: z.string().min(2, { message: "Please enter a valid first name" }),
  lastName: z.string().min(2, { message: "Please enter a valid last name" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Please enter a valid phone number" }),

  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
