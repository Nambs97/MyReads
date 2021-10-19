import React, { Component } from 'react';

class BookItem extends Component {
  	
  	onUpdateBookShelf = (book, shelfId) => {
    	this.props.onUpadateBookShelf(book, shelfId);
    }
  
	render() {
      const { book } = this.props;
    	return(
        	<div className="book">
              <div className="book-top">
              	<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+  (book.imageLinks.thumbnail).replace('http','https')+')' }}></div>
              <div className="book-shelf-changer">
                <select onChange={(e) => {
                		this.onUpdateBookShelf(book, e.target.value)
                	}} defaultValue={book.shelf || "none"}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
              </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{(book.authors && book.authors.length > 0) && book.authors.join(" & ")}</div>
          	</div>
        )
    }
}

export default BookItem;