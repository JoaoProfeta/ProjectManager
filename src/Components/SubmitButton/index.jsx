import { SubmitButton } from "./styles";

export const Submit = ({ text,disabled }) => {
  return (
    <SubmitButton disabled={disabled}>
      {text}
    </SubmitButton>
  );
};
