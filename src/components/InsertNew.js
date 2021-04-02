import React, { useState } from 'react';
import SearchArea from '../components/reusable/SearchArea';
import BookCard from '../components/reusable/BookCard'
import axios from 'axios';


const InsertNew = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const baseURL = 'https://www.googleapis.com/books/v1/volumes'
    const onInputChange = (e) => {
        setSearchTerm(e.target.value);
    }
    React.useEffect(() => {
        console.log(books);
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
            <BookCard books={books} />
        </div>
    );
}
export default InsertNew;