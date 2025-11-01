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

export function WithSubmitAndReset() {
  const [action, setAction] = useState<string | null>(null);

  return (
    <Form
      style={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        setAction("submit " + JSON.stringify(data));
      }}
      onReset={() => {
        setAction("reset");
      }}
    >
      <TextField name="username" isRequired label="Username" />
      <TextField name="password" type="password" isRequired label="Password" />
      <Flex gap="2">
        <Button type="submit">Submit</Button>
        <Button type="reset">Reset</Button>
      </Flex>
      {action && (
        <div>
          Action: <code>{action}</code>
        </div>
      )}
    </Form>
  );
}
