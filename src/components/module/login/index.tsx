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
    password: Yup.string().required("Password name is required!"),
  });

  const formik = useFormik({
    validationSchema,
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: login,
  });

  return (
    <form className="flex flex-col gap-10" onSubmit={formik.handleSubmit}>
      <Input
        label="User Name *"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
        error={formik.errors.username}
      />
      <Input
        label="Password *"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Button label="Submit" type="submit" />
    </form>
  );
};

export { Login };
