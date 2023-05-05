
import { StyledMessage } from "./styles";
export const Message = ({ msg }) => {

	return (
		<StyledMessage>
			<span>{msg}</span>
		</StyledMessage>
	);
};
