<<<<<<< HEAD:src/Components/Loading/index.jsx
import { Load } from "./styles";
=======
import { StyledLoading } from "./styles";
>>>>>>> 212c14aee212a4a5530e764be8ff67207f316959:src/Components/Loading/Loading.jsx
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
