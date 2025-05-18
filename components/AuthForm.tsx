"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        toast.success("Account created successfully Please Sign in");
        console.log("SIGN-UP", values);
        router.push("sign-in");
      } else {
        toast.success("Signed in successfully");
        console.log("SIGN-IN", values);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong: ${error}`);
    }
  }

  const isSignIn = type === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-3 justify-center">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
        </div>
        <h3 className="text-center">Practice Job interviews with AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Enter your name"
              />
            )}
            <FormField
              control={form.control}
              name="email"
              label="Email  "
              placeholder="Enter your email"
              type="email"
            />
            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />
            <Button className="btn-primary w-full" type="submit">
              {isSignIn ? "Sign in" : "Create an account"}
            </Button>
          </form>
        </Form>
        <p>
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <Link
            className="font-bold text-user-primary"
            href={isSignIn ? "/sign-up" : "/sign-in"}
          >
            {isSignIn ? "Sign up" : "Sign in"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
