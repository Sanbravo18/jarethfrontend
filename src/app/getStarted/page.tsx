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

function GetStarted() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const prevState = {}; // Define el estado previo según sea necesario
      await registerUserAction(prevState, formData);
    } catch (error) {
      console.error("Error registrando usuario:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="Ej: luismi123"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Apellidos</Label>
                <Input
                  id="last-name"
                  name="lastName"
                  placeholder="Ej: Rodriguéz Tapia"
                  required
                />
              </div>
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
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Crear cuenta
            </Button>
            <Button variant="outline" className="w-full">
              Registrarse con Google
            </Button>
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
