import { SubmitButton } from "./styles";

export const Button = ({ text,...rest }) => {
  return (
    <SubmitButton>
        {text}
    </SubmitButton>
  );
};
