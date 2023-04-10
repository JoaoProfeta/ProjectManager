import { Load } from "./styles";
import loading from "../../../assets/loading.svg";
export const Loading = () => {
  return (
    <Load>
      <img
        className="loader"
        src={loading}
        alt="Loading"
      />
    </Load>
  );
};
