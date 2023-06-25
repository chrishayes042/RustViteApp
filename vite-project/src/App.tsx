import { useEffect, useState } from "react";
import { Person } from "./types";

function App() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);

  return (
    <div>
      {people.map((person) => (
        <p>
          {person.name} is {person.age} years old
        </p>
      ))}
    </div>
  );
}

export default App;
