import { StyledSection } from "./styles";


export function Section ({ textPromotional, imgProtional, alt, }) {
	return (
		<StyledSection >
			<div>
				{textPromotional}
				<div
					className="divBtn"
				>
				</div>
			</div>
			<div>
				<img
					alt={alt}
					src={imgProtional}
				/>
			</div>
		</StyledSection>
	);
}

export function SectionTypeTwo ({ textPromotional, imgProtional, alt }) {

	return (
		<StyledSection>
			<div>
				<img
					alt={alt}
					src={imgProtional}
				/>
			</div>

			<div>
				{textPromotional}
			</div>
		</StyledSection>
	);

}
