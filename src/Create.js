import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const history = useHistory()
  
  const submit = (e) => {
    e.preventDefault()
    const book = { title, body, author }

    fetch('http://localhost:9000/books', {
        method: 'POST',
        headers: { "Content-type": "application/json"},
        body: JSON.stringify(book)
    })
    .then(() => {
        history.push('/')
    })
  }

  return (
    <div className="create">
      <h2>Shto nje liber</h2>
      <form onSubmit={submit}>
        <label>Titulli:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label>Permbatja:</label>
        <textarea required value={body}onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Autori:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Darwin">Darwin</option>
          <option value="Galton">Galton</option>
        </select>
        <button>Shto Liber</button>
      </form>
    </div>
  );
}
 
export default Create;