"use server";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  try {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
      return {
        success: false,
        error: "Invalid input",
      };
    }

    const { firstName, lastName, phoneNumber, email, password } =
      validatedFields.data;

    const response = await fetch(
      process.env.BACKEND_API_URL + "/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          email,
          password,
        }),
      },
    );

    if (!response.ok) {
      return {
        success: false,
        error: "Failed to register",
      };
    }

    return {
      success: true,
      message: "Register successful",
    };
  } catch (error) {
    console.error("Error during registration:", error);
    return {
      success: false,
      error: "Failed to register",
    };
  }
};
