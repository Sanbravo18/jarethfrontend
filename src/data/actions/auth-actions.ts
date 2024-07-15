"use server";
import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  registerUserService,
  loginUserService,
} from "@/data/services/auth-service";

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

const noSpaces = (val: string) => !/\s/.test(val);

const schemaRegister = z.object({
  username: z
    .string()
    .min(3)
    .max(20, {
      message: "el nombre de usuario debe ser entre 3 y 20 caracteres",
    })
    .refine(noSpaces, {
      message: "nombre de usuario no debe contener espacios",
    }),
  password: z.string().min(6).max(100, {
    message: "la contraseña debe ser entre 6 y 100 caracteres",
  }),
  email: z.string().email({
    message: "por favor ingrese un email valido",
  }),
  name: z.string().min(3).max(20, {
    message: "el nombre debe ser entre 3 y 20 caracteres",
  }),
  lastname: z.string().min(3).max(20, {
    message: "el apellido debe ser entre 3 y 20 caracteres",
  }),
});

export async function registerUserAction(prevState: any, formData: FormData) {
  const validatedFields = schemaRegister.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
    name: formData.get("name"),
    lastname: formData.get("lastname"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Falla de registro, campo faltante",
    };
  }

  const responseData = await registerUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      message: "Ops! algo salio mal, intenta de nuevo.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "falla de registro.",
    };
  }

  cookies().set("jwt", responseData.jwt, config);
  redirect("/");
}

const schemaLogin = z.object({
  identifier: z
    .string()
    .min(3, {
      message: "Su nombre de usuario o email debe tener al menos 3 caracteres",
    })
    .max(20, {
      message: "Su nombre de usuario o email debe tener menos de 20 caracteres",
    }),
  password: z
    .string()
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    })
    .max(100, {
      message: "La contraseña debe tener menos de 100 caracteres",
    }),
});

export async function loginUserAction(prevState: any, formData: FormData) {
  const validatedFields = schemaLogin.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
    };
  }

  const responseData = await loginUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Ops! Something went wrong. Please try again.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Failed to Login.",
    };
  }

  cookies().set("jwt", responseData.jwt);
  redirect("/");
}

export async function logoutAction() {
  cookies().set("jwt", "", { ...config, maxAge: 0 });
  redirect("/");
}
