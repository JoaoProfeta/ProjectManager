/* eslint-disable no-undef */

import { StyledInput } from "./Styles";


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
