
import loading from "../../assets/loading.svg";
export const Loading = () => {
	return (
		<StyledLoading>
			
			<img
				className="loader"
				src={loading}
				alt="Loading"
			/>
		</StyledLoading>
	);
};
