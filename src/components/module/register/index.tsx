"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useAuth } from "@/contexts/auth-provider";
import { Gender } from "@/core/_user";
import { RegisterBody } from "@/core/_auth";

type Props = {};

const Register = ({}: Props) => {
  const { register } = useAuth();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    surname: Yup.string().required("Surname is required!"),
    username: Yup.string().required("User name is required!"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required!"),
    birthday: Yup.date().required("Birthdate is required!").nullable(),
    phone: Yup.string()
      .matches(/^[0-9]{10,11}$/, "Phone number must be 10 or 11 digits")
      .required("Phone number is required!"),
    gender: Yup.string().required("Gender is required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required!"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Password confirmation is required!"),
  });

  const formik = useFormik<RegisterBody>({
    validationSchema,
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      birthday: "",
      phone: "",
      gender: Gender.male,
      password: "",
      passwordConfirm: "",
      membershipAgreement: false,
      expressConsentAgreement: false,
    },
    onSubmit: register,
  });

  const genders: { value: Gender; label: string }[] = [
    { value: Gender.female, label: "Female" },
    { value: Gender.male, label: "Male" },
  ];
  return (
    <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
      <Input
        label="Name *"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.errors.name}
      />
      <Input
        label="Surname *"
        name="surname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.surname}
        error={formik.errors.surname}
      />
      <Input
        label="Username *"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
        error={formik.errors.username}
      />
      <Input
        label="E-mail *"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Input
        label="Birth Day *"
        name="birthday"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.birthday}
        error={formik.errors.birthday}
      />
      <Input
        label="Phone Number *"
        name="phone"
        type="tel"
        inputMode="numeric"
        pattern="[0-9]{10,11}"
        maxLength={11}
        onChange={formik.handleChange}
        value={formik.values.phone}
        error={formik.errors.phone}
      />

      <Select
        label="Gender *"
        name="gender"
        options={genders}
        onChange={formik.handleChange}
        value={formik.values.gender}
        error={formik.errors.gender}
      />
      <Input
        label="Password *"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Input
        label="Password Confirm *"
        name="passwordConfirm"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.passwordConfirm}
        error={formik.errors.passwordConfirm}
      />
      <Button
        className="justify-center"
        label="Register"
        suffixIcon="EntranceLeft"
        type="submit"
      />
    </form>
  );
};

export { Register };
