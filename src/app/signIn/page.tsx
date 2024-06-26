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

function SignIn() {
  return (
    <Card className="mx-auto max-w-sm mt-6 mb-6">
      <CardHeader>
        <CardTitle className="text-2xl">Ingresar</CardTitle>
        <CardDescription>
          Ingrese su email debajo para ingresar a su cuenta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Contraseña</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Ingresar
          </Button>
          <Button variant="outline" className="w-full">
            Ingresar con Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          ¿No tienes cuenta?{" "}
          <Link href="/getStarted" className="underline">
            Registrate
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default SignIn;
