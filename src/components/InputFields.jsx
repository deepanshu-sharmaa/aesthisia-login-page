import React, { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

const InputFields = ({ onSubmit }) => {
  const [form, { errors }] = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errors.any()) {
      onSubmit(form.values);
    }
  };

  return (
    <FormProvider form={form}>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          ref={form.register}
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={form.register}
        />
        {errors.password && <p>{errors.password}</p>}

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default InputFields;
