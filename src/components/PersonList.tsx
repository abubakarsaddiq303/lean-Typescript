import { useContext } from "react";
import { ThemeContext } from "../components/contexts/ThemeContext";

type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.secondary.main,
        borderRadius: theme.secondary.borderRadius,
      }}
    >
      {props.names.map((name) => {
        return (
          <h1 key={name.first}>
            {name.first}
            {name.last}
          </h1>
        );
      })}
    </div>
  );
};
