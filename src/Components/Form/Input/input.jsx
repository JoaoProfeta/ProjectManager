import { InputComp } from "./Styles";

export const Input = ({ text, name, handleOnChange, ...rest }) => {
  return (
    <InputComp>
      <label htmlFor={name}>{text}:</label>
      <input
        id={name}
        name={name}
        {...rest}
        onChange={handleOnChange}
      />
    </InputComp>
  );
};
