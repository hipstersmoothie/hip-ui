import * as stylex from "@stylexjs/stylex";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { TextField } from "@/components/text-field";

const styles = stylex.create({
  form: {
    width: "min(300px, 80%)",
  },
});

export function Basic() {
  return (
    <Form style={styles.form}>
      <TextField name="email" type="email" isRequired label="Email" />
      <TextField name="password" type="password" isRequired label="Password" />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
