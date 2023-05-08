import { NewStickyNote } from "../../components/NewStickyNote";
import { StickyNote } from "../../components/StickyNote";
import { Container } from "./styles";
import { useEffect, useState } from "react";

interface Tasks {
  id: number;
  title: string;
  description: string;
  created_at: Date;
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
  }, [tasks]);

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
            />
          ))}
        <NewStickyNote />
      </Container>
    </>
  );
}
