import Note from "./Note";

type Props = {
  notes: PostIt[];
};
export type PostIt = {
  text: any;
};
const Notes = ({ notes }: Props) => {
  return (
    <>
      {notes.map((note) => (
        <Note text={note.text}></Note>
      ))}
    </>
  );
};

export default Notes;
