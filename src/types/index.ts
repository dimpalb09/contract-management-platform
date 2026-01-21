// src/types/index.ts

export interface Field {
  id: string;
  type: "text" | "date" | "signature" | "checkbox";
  label: string;
  position: { x: number; y: number };
  value?: string | boolean;
}

export interface Blueprint {
  id: string;
  name: string;
  fields: Field[];
}

export interface Contract {
  id: string;
  blueprintId: string;
  status: "Created" | "Approved" | "Sent" | "Signed" | "Locked";
  fieldValues: { [fieldId: string]: string | boolean };
}
