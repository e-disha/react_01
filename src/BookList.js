import { Link } from 'react-router-dom'

const BookList = ({ books }) => {
    return (
        <div className="book-list">
            <h1>Te Gjithe Librat</h1>
            {books.map((book) => (
                <div className="book-preview" key={book.id}>
                    <Link to={`/books/${book.id}`}>
                        <h2>{ book. title }</h2>
                        <p>Shkruar nga: { book.author }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BookList;