
const Note = ({ note }) => {
    return (
        <li className={note.important ? 'important' : ''}>
            {note.content}
        </li>
    );
};

export default Note;
