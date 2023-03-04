import { useEffect, useState } from 'react'
import BookList from './BookList';
import useFetch from './useFetch';

const Home = () => {
    const { data:books, loading, error } = useFetch('http://localhost:9000/books')

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            {loading && <div>Ju lutem prisni...</div>}
            {books && <BookList books={books} />}
        </div>
    );
}
 
export default Home;