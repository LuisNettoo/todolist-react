import { Container } from "./styles";
import { TbTrashX } from "react-icons/tb";

interface StickyNoteProps {
  id: number;
  title: string;
  description: string;
}

export function StickyNote({ id, title, description }: StickyNoteProps) {
  const removeTask = () => {
    fetch(`http://localhost:3000/todo/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <Container>
      <button onClick={removeTask}>
        <TbTrashX />
      </button>
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  );
}
