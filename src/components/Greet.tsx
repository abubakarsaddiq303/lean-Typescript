import { useContext } from "react";
import { ThemeContext } from "../components/contexts/ThemeContext";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.primary.main }}>
      <h1>
        {isLoggedIn
          ? `Welcom ${name} you have ${messageCount} unread messages!!!`
          : "welcome Guest"}
      </h1>
    </div>
  );
};
