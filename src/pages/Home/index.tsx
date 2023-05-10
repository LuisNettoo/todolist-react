import { NewStickyNote } from "../../components/NewStickyNote";
import { StickyNote } from "../../components/StickyNote";
import { Container } from "./styles";
import { useEffect, useState } from "react";

interface Tasks {
  id: number;
  title: string;
  description: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/todo", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (id: number) => {
    fetch(`http://localhost:3000/todo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Lista de Afazeres</h1>
      <Container>
        {tasks.length > 0 &&
          tasks.map((task) => (
            <StickyNote
              id={task.id}
              key={task.id}
              title={task.title}
              description={task.description}
              handleRemove={handleRemove}
            />
          ))}
        <NewStickyNote />
      </Container>
    </>
  );
}
