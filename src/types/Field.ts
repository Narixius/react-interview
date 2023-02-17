export type Field = {
  name: string;
  component: "textarea" | "input" | "select";
  props: any;
};
export type FormField = Field[][];
