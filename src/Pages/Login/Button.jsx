import { ButtonCustomized } from "./styles";


export const Button = ({ disabled,text, onClick,...rest }) => {

	return (
		<ButtonCustomized onClick={onClick} disabled={disabled} {...rest}>
			{text}
		</ButtonCustomized>
	);
}; 