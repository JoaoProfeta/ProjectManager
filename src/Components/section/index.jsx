import { StyledSection } from "./styles";

import { LinkButton } from "../linkButtom";


export function Section ({ textPromotional, imgProtional, alt, buttonExists }) {
	return (
		<StyledSection >
			<div>
				{textPromotional}
				<div
					className="divBtn"
				>
					{buttonExists
						? <LinkButton
							text="Start login"
							to="/login"
						  />
						: null}
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
