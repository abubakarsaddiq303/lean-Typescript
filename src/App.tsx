import "./App.css";
import Private from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/contexts/Box";
import { ThemeContextProvider } from "./components/contexts/ThemeContext";
import { List } from "./components/generics/List";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Status } from "./components/Status";
import { Oscar } from "./Oscar";

function App() {
  const personName = {
    first: "Salman",
    last: "Khan",
  };

  const nameList = [
    {
      first: "Abubakar",
      last: "saddiq",
    },
    {
      first: "Tabish",
      last: "saifi",
    },
    {
      first: "Muhammad",
      last: "Shouib",
    },
    {
      first: "Mohsin",
      last: "qazi",
    },
  ];

  return (
    <div className="App">
      <Greet name="Saddiq" messageCount={20} isLoggedIn={true} />
      <br /> <br />
      <Person name={personName} />
      <br /> <br />
      <PersonList names={nameList} />
      <br /> <br />
      <Status status="loading" />
      <br /> <br />
      <br /> <br />
      <Oscar>
        <Heading>Abubakar Saddiq from </Heading>
      </Oscar>
      <br /> <br />
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <br /> <br />
      <Input value="" handleChange={(event) => console.log(event)} />
      <br /> <br />
      <Container
        styles={{
          border: "5px solid #f50057",
          padding: "1rem",
          background: "#ff7575",
          borderRadius: "50px",
          color: "white",
        }}
      />
      <LoggedIn />
      <br /> <br />
      <User />
      <br /> <br />
      <Counter />
      <br /> <br />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <br /> <br />
      <MutableRef />
      <br /> <br />
      <DomRef />
      <br /> <br />
      <Private isLoggedIn={true} component={Profile} />
      <br /> <br />
      <List
        items={["Abubakar", "saddiq", "bangash"]}
        onClick={(item) => console.log(item)}
      />
      <br /> <br />
      <List
        items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
        onClick={(item) => console.log(item)}
      />
      <br /> <br />
      {/* <List
        items={[
          {
            id: 1,
            first: "abubakar",
            last: "saddiq",
          },
          {
            id: 2,
            first: "abubakar",
            last: "saddiq",
          },
          {
            id: 3,
            first: "abubakar",
            last: "saddiq",
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
    </div>
  );
}

export default App;
