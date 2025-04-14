"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/auth-provider";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const { login } = useAuth();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("User name is required!"),
    password: Yup.string().required("Password is required!"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: login,
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
      <Input
        label="User Name *"
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        error={formik.errors.username}
      />
      <Input
        label="Password *"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Button
        className="justify-center"
        label="Login"
        suffixIcon="EntranceLeft"
        type="submit"
      />
    </form>
  );
};

export { Login };
