"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
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
import { loginUserAction } from "@/data/actions/auth-actions";
import { StrapiErrors } from "@/components/custom/StrapiErrors";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

function SignIn() {
  const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);

  return (
    <form action={formAction}>
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
              <Label htmlFor="identifier">Email</Label>
              <Input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <Input id="password" name="password" type="password" required />
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
    </form>
  );
}

export default SignIn;
