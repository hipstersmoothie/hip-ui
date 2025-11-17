import { useState } from "react";

import { EditableText } from "@/components/editable-text";

export function Basic() {
  const [value, setValue] = useState("Click to edit");
  return <EditableText onChange={setValue}>{value}</EditableText>;
}
