import React, { useState } from 'react';
import SearchArea from '../components/reusable/SearchArea';
import BookList from '../components/lists/BookList';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import axios from 'axios';


const InsertNew = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const baseURL = 'https://www.googleapis.com/books/v1/volumes'
    const onInputChange = (e) => {
        setSearchTerm(e.target.value);
    }
    React.useEffect(() => {
        if (books.length > 0)
            console.log(books[0].volumeInfo.imageLinks.thumbnail);
    }, [books]);
    const searchBook = async () => {
        const booksData = await axios.get(baseURL,
            {
                params: { q: searchTerm }
            }
        )
        setBooks(booksData.data.items);
    }

    return (
        <div>
            <SearchArea handleSearch={onInputChange} searchBook={searchBook} />
            {books.length > 0 ? <BookList books={books} /> : null}
        </div>
    );
}
export default InsertNew;