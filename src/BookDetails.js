import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';


const BookDetails = () => {
    const { id } = useParams()
    const { data: book, loading, error } = useFetch(' http://localhost:9000/books/' + id)
    const history = useHistory()

    const deleteBook = () => {
        fetch('http://localhost:9000/books/' + book.id, {
            method: 'DELETE'
        })
        .then(() => {
            history.push('/')
        })
    }
    return (
        <div className="book-details">
            { loading && <div>Ju lutem prisni...</div>}
            { error && <div>Dicka shkoi keq...</div>}
            { book && (
                <article>
                    <h2>{ book.title }</h2>
                    <p>{ book.body }</p>
                    <p>Shkruar nga: {book.author }</p><br></br>
                    <button onClick={deleteBook}>Fshij Librin</button>
                </article>
            )}
        </div>
    );
}
 
export default BookDetails;