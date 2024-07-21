"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

const RegisterPage = () => {
  const { register, formState, handleSubmit } = useForm<{
    firstName: string;
  }>({
    mode: "all",
  });

  // formState.
  // formState is an object that contains information about the form state like dirty, isSubmitted, touched, and errors.

  // OnChange
  // OnBlur
  // ref
  // name
  // value
  // checked
  // type
  // required
  // disabled
  // readOnly
  // multiple
  // accept
  // pattern
  // min
  // max

  // All of the above props are supported by the register function.

  // register().

  const onSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div className="flex max-w-xl w-full min-h-screen flex-col items-center justify-center p-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("firstName", {
            required: {
              value: true,
              message: "First Name is required",
            },
            minLength: {
              value: 3,
              message: "First Name should be at least 3 characters",
            },
          })}
          placeholder="First Name"
        />
        <p className="mt-2">{formState.errors.firstName?.message}</p>
      </form>
    </div>
  );
};

export default RegisterPage;
