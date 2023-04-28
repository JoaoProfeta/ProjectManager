/* eslint-disable no-undef */

import { StyledInput, StyledInputForm } from "./Styles";


export const Input = ({ text, name, handleOnChange, ...rest }) => {
	return (
		<StyledInput>
			<label htmlFor={name}>{text}:</label>
			<input
				id={name}
				name={name}
				{...rest}
				onChange={handleOnChange}
			/>
		</StyledInput>
	);
};
export const InputForm = ({ text, error,name, handleOnChange, ...rest }) => {
	return (
		<StyledInputForm isErrored={!!error}>
			<label htmlFor={name}>{text}</label>
			<input
				id={name}
				name={name}
				onChange={handleOnChange}
				{...rest}
			/>
			{!!error && <span>{error.message}</span>}
		</StyledInputForm>
	);
};
