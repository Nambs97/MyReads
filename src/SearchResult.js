import React from 'react';
import BookItem from './BookItem';

const SearchResult = (props) => {
  	const { books, booksonshelf } = props;
    const bookshelfId = booksonshelf.map(bookshelf => bookshelf.id);
	return (
        	<div className="search-books-results">
            	<ol className="books-grid">
          			{ (books && books.length > 0) && books.map((book) => (
        				<li key={book.id}>
                        	<BookItem  onUpadateBookShelf={props.onUpadateBookShelf} 
  								book={bookshelfId.includes(book.id) 
										? booksonshelf.filter(bookshelf => bookshelf.id === book.id)[0] 
										: book } />
						</li>
        			))}
          		</ol>
            </div>
    );
}

export default SearchResult;