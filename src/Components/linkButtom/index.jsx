//import { Button } from "./styles";
import { LinkBtn } from "./styles";

export const LinkButton = ({ to, text }) => {
	return (
		<LinkBtn
			to={to}
		>
			{text}
		</LinkBtn>
	);
};
