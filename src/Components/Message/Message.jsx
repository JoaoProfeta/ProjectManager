import { StyledMessage } from "./styles";
import { useState, useEffect } from "react";
export const Message = ({ type, msg }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return <>{visible && <StyledMessage className={type}>{msg}</StyledMessage>}</>;
};
