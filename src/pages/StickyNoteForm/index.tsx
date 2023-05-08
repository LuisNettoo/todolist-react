import { useState } from "react";
import { Form } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

interface StickyNoteFormProps {
  closeModal: () => void;
}

export function StickyNoteForm({ closeModal }: StickyNoteFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const date = new Date();
    const dateFormated = new Intl.DateTimeFormat("pt-BR").format(date);

    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        created_at: dateFormated,
      }),
    });

    closeModal();
  };

  return (
    <Form autoComplete="off">
      <button onClick={closeModal}>
        <AiOutlineClose />
      </button>
      <h2>Nova Tarefa</h2>
      <div className="title">
        <input
          type="text"
          id="title"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="description">
        <input
          type="text"
          id="description"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Salvar
      </button>
    </Form>
  );
}
