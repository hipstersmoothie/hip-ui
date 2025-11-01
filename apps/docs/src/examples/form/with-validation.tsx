"use client";

import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Form } from "@/components/form";
import { TextField } from "@/components/text-field";

const styles = stylex.create({
  form: {
    width: "min(300px, 80%)",
  },
});

export function WithValidation() {
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({});

  return (
    <Form
      style={styles.form}
      validationErrors={validationErrors}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));

        // Simulate server-side validation
        const errors: Record<string, string> = {};
        if (formData.username === "admin") {
          errors.username = "Sorry, this username is taken.";
        }
        if (
          !formData.email ||
          (typeof formData.email === "string" && !formData.email.includes("@"))
        ) {
          errors.email = "Please enter a valid email address.";
        }

        setValidationErrors(errors);

        if (Object.keys(errors).length === 0) {
          alert("Form submitted successfully!");
        }
      }}
    >
      <TextField name="username" isRequired label="Username" />
      <TextField name="email" type="email" isRequired label="Email" />
      <Flex gap="2">
        <Button type="submit">Submit</Button>
      </Flex>
    </Form>
  );
}
