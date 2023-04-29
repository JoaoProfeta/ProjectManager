import { ButtonCustomized } from "./styles";


export function Button ({ disabled, text, onClick, ...rest }) {

	return (
		<ButtonCustomized
			disabled={disabled}
			onClick={onClick}
			{...rest}
		>
			{text}
		</ButtonCustomized>
	);

}
