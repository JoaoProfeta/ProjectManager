import { StyledContainer } from "./Style";

export const Container = (props) => {
	return (
		<StyledContainer
			styleHeight={props.styleHeight}
			start={props.start}
			columnStyle={props.column}
		>
			{props.children}
		</StyledContainer>
	);
};
