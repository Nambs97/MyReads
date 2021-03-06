import React, { Component } from 'react';
import BookItem from './BookItem';

class BookShelf extends Component {
	render() {
      const { shelf, books } = this.props;
    	return (
        	<div className="bookshelf">
            	<h2 className="bookshelf-title">{shelf.display}</h2>
            	<div className="bookshelf-books">
            		<ol className="books-grid">
						{books.map(book => (
                         	<li key={book.id}>
                      			<BookItem onUpadateBookShelf={this.props.onUpadateBookShelf} book={book} />
                      		</li>
                         ))}
            		</ol>
            	</div>
            </div>
        );
    }
}

export default BookShelf;