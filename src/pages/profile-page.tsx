"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ProfileLayout } from "@/components/module/profile-layout";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { IBreadcrumb } from "@/core/_breadcrumb";
import { Gender } from "@/core/_user";
import { useAuth } from "@/contexts/auth-provider";
import { useEffect } from "react";
import { RegisterBody } from "@/core/_auth";

type Props = {
  title: string;
  breadcrumb: IBreadcrumb[];
};

const ProfilePage = ({ breadcrumb, title }: Props) => {
  const { session, updateUser } = useAuth();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    surname: Yup.string().required("Surname is required!"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required!"),
    birthday: Yup.date().required("Birthdate is required!").nullable(),
    phone: Yup.string()
      .matches(/^[0-9]{10,11}$/, "Phone number must be 10 or 11 digits")
      .required("Phone number is required!"),
    gender: Yup.string().required("Gender is required!"),
  });

  const formik = useFormik<Partial<RegisterBody>>({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      birthday: "",
      phone: "",
      gender: Gender.male,
    },
    validationSchema,
    onSubmit: updateUser,
  });

  useEffect(() => {
    if (session.user) {
      formik.setValues({
        name: session.user.name,
        surname: session.user.surname,
        email: session.user.email,
        birthday: session.user.birthday,
        phone: session.user.phone,
        gender: session.user.gender,
      });
    }
  }, [session]);

  const genders: { value: Gender; label: string }[] = [
    { value: Gender.female, label: "Female" },
    { value: Gender.male, label: "Male" },
  ];

  return (
    <section className="section-md">
      <div className="container">
        <div className="flex justify-between items-center my-6">
          {<h3 className="font-bold text-text-primary text-2xl">{title}</h3>}
          <Breadcrumb list={breadcrumb} />
        </div>
        <div className="row">
          <div className="col-span-2">
            <ProfileLayout />
          </div>
          <div className="col-span-8">
            <div className="p-10">
              <form className="row" onSubmit={formik.handleSubmit}>
                <div className="col-span-12">
                  <h3 className="font-medium text-sm text-text-primary">
                    My Account Information
                  </h3>
                </div>
                <div className="col-span-6">
                  <Input
                    label="Name"
                    className="w-full"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.errors.name}
                  />
                </div>
                <div className="col-span-6">
                  <Input
                    label="Last Name"
                    className="w-full"
                    name="surname"
                    onChange={formik.handleChange}
                    value={formik.values.surname}
                    error={formik.errors.surname}
                  />
                </div>
                <div className="col-span-6">
                  <Input
                    label="Telephone"
                    className="w-full"
                    name="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    error={formik.errors.phone}
                  />
                </div>
                <div className="col-span-6">
                  <Input
                    label="Email Address"
                    className="w-full"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email}
                  />
                </div>
                <div className="col-span-6">
                  <Input
                    label="Date of birth"
                    type="date"
                    className="w-full"
                    name="birthday"
                    onChange={formik.handleChange}
                    value={formik.values.birthday}
                    error={formik.errors.birthday}
                  />
                </div>
                <div className="col-span-6">
                  <Select
                    label="Gender"
                    name="gender"
                    options={genders}
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                    error={formik.errors.gender}
                  />
                </div>
                <div className="col-span-3">
                  <Button
                    label="Update"
                    size="lg"
                    type="submit"
                    variant="outline"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProfilePage };
