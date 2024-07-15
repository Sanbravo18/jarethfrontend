"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerUserAction } from "@/data/actions/auth-actions";
import { useFormState } from "react-dom";
import { StrapiErrors } from "@/components/custom/StrapiErrors";
import { ZodErrors } from "@/components/custom/ZodErrors";

const INITIAL_STATE = {
  data: null,
  zodErrors: null,
  message: null,
};

function GetStarted() {
  const [formState, formAction] = useFormState(
    registerUserAction,
    INITIAL_STATE,
  );

  console.log(formState, "client");
  console.log("StrapiErrors:", formState.strapiErrors);

  return (
    <form action={formAction}>
      <Card className="mx-auto max-w-sm mt-6 mb-6">
        <CardHeader>
          <CardTitle className="text-xl">Registrate</CardTitle>
          <CardDescription>
            Ingresa tu información para registrarte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ej: Luis Miguel"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastname">Apellidos</Label>
                <Input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Ej: Rodriguéz Tapia"
                  required
                />
              </div>
            </div>
            <ZodErrors error={formState?.zodErrors?.name} />
            <ZodErrors error={formState?.zodErrors?.lastname} />
            <div className="grid gap-2">
              <Label htmlFor="username">Nombre de Usuario</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="luismi123"
                required
              />
              <ZodErrors error={formState?.zodErrors?.username} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email@ejemplo.com"
                required
              />
              <ZodErrors error={formState?.zodErrors?.email} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
              <ZodErrors error={formState?.zodErrors?.password} />
            </div>
            <Button type="submit" className="w-full">
              Crear cuenta
            </Button>
            <Button variant="outline" className="w-full">
              Registrarse con Google
            </Button>
            <StrapiErrors error={formState?.strapiErrors} />
          </div>

          <div className="mt-4 text-center text-sm">
            ¿Ya tienes un cuenta?{" "}
            <Link href="/signIn" className="underline">
              Ingresar
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

export default GetStarted;
