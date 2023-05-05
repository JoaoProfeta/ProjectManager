import { SubmitButton } from "./styles";

export const Submit = ({ text,disabled, ...rest }) => {
	return (
		<SubmitButton disabled={disabled} {...rest}>
			{text}
		</SubmitButton>
	);
};
