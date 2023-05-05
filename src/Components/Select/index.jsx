import { StyledSelect } from "./styles";

export const Select = ({
	value,
	name,
	text,
	options,
	handleOnChange,
	...rest
}) => {
	return (
		<StyledSelect>
			<label htmlFor={name}>{text}:</label>
			<select
				id={name}
				name={name}
				{...rest}
				onChange={handleOnChange}
				value={value || ""}
			>
				<option>--</option>
				{options.map((option) => (
					<>
						<option
							value={option.id}
							key={option.id}
						>
							{option.name}
						</option>
					</>
				))}
			</select>
		</StyledSelect>
	);
};
