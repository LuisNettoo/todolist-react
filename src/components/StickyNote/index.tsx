import { Container } from "./styles";
import { TbTrashX } from "react-icons/tb";

interface StickyNoteProps {
  id: number;
  title: string;
  description: string;
  handleRemove: (arg0: number) => void;
}

export function StickyNote({
  id,
  title,
  description,
  handleRemove,
}: StickyNoteProps) {
  const removeTask = (event: React.FormEvent) => {
    event.preventDefault();
    handleRemove(id);
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
