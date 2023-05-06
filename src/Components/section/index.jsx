import { StyledSection } from "./styles";


export function Section ({ orderSt,orderSt2,textPromotional, imgProtional, alt, }) {
	return (
		<StyledSection >
			<div style={{ order:orderSt }} className="add-order-1">
				{textPromotional}
			</div>
			<div style={{ order:orderSt2 }} className="add-order-2">
				<img
					alt={alt}
					src={imgProtional}
				/>
			</div>
		</StyledSection>
	);
}



