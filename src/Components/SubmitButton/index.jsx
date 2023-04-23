import { SubmitButton } from "./styles";

<<<<<<< HEAD
export const Submit = ({ text,disabled }) => {
  return (
    <SubmitButton disabled={disabled}>
      {text}
=======
export const Button = ({ text,...rest }) => {
  return (
    <SubmitButton>
        {text}
>>>>>>> d60250c1da021efbb0828b42adfef35b3559b4e6
    </SubmitButton>
  );
};
