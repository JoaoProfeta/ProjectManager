import { StyledSection } from "./styles";

import { LinkButton } from "../linkButtom";



export const Section = ({ textPromotional,imgProtional,alt, buttonExists })=>{

	return(
		<StyledSection >
			<div>
				{textPromotional}
				<div className="divBtn">{buttonExists && <LinkButton to="/login" text="Start login"/>}</div>
			</div>
			<div>
				<img src={imgProtional} alt={alt} />
			</div>
		</StyledSection>
	);
};

export const SectionTypeTwo = ({ textPromotional,imgProtional,alt, buttonExists })=>{

	return(
		<StyledSection>
			<div>
				<img src={imgProtional} alt={alt} />
			</div>
			<div>
				{textPromotional}
			</div>
		</StyledSection>
	);
};