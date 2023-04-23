import { StyledContainer } from "./Style";

export const Container = (props) => {
	return (
		<StyledContainer
			styleHeight={props.styleHeight}
			startStyle={props.start}
			columnStyle={props.column}
		>
			{props.children}
		</StyledContainer>
	);
};
