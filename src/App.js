import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPanel from './SearchPanel';
import BookList from './BookList';
import { Route } from 'react-router-dom';

const shelves = [ {id: 'currentlyReading', display: 'Currently Reading'},
                 {id: 'wantToRead', display: 'Want to Read'},
                 {id: 'read', display: 'Read'}];

class BooksApp extends React.Component {
  	state = {
      books: []
	}
  
    componentDidMount() {
		this.refreshBookShelf();
    }
  
  	refreshBookShelf() {
    	BooksAPI.getAll().then((books)=>{
          	this.setState({
            	books: books
            });
        });
    }
  
  	updateBookShelf = (book, shelfId) => {
  		BooksAPI.update(book, shelfId).then(() => {
          	this.refreshBookShelf();
        });
  	}

  render() {
    return (
      	<div className="app">
      		<Route path='/search' render={() => (
    			<SearchPanel booksonshelf={this.state.books}
  					onUpadateBookShelf={this.updateBookShelf}/>
    		)} />
			<Route exact path='/' render={() => (
            	<BookList 
              		books={this.state.books} 
					shelves={shelves}
					onUpadateBookShelf={this.updateBookShelf}/>
            ) } />
      </div>
    )
  }
}

export default BooksApp
