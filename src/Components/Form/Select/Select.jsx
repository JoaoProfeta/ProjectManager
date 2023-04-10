import { ThisSelect } from "./styles";

export const Select = ({
  value,
  text,
  name,
  options,
  handleOnChange,
  ...rest
}) => {
  return (
    <ThisSelect>
      <label htmlFor={name}>{text}:</label>
      <select
        id={name}
        name={name}
        {...rest}
        onChange={handleOnChange}
        value={value || ""}
      >
        {options.map((option) => (
          <option
            value={option.id}
            key={option.id}
          >
            {option.name}
          </option>
        ))}
      </select>
    </ThisSelect>
  );
};
