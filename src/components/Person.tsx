import { useContext } from "react";
import { ThemeContext } from "../components/contexts/ThemeContext";

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: PersonProps) => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ background: theme.primary.main }}>
      <h1>
        {props.name.first} {props.name.last}
      </h1>
    </div>
  );
};
