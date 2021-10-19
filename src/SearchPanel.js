import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import * as BooksAPI from './BooksAPI'

const maxResults = 20;

class SearchPanel extends Component {
  	state = {
    	query: '',
      	books: []
    }
  
  	handleQueryChange = (newQuery) => {
    	this.setState({
    		query: newQuery
    	}, () => {this.refreshSearchResult()});
      	
    }
  
  	refreshSearchResult = () => {
      	if (this.state.query === '' || this.state.query === null || this.state.query === undefined) {
        	this.setState({
            	books: []
            });
        } else {
        	BooksAPI.search(this.state.query, maxResults).then((books) => {
        		this.setState({
            		books: books
            	});
        	});
        }
    	
    }
    
  	
	render() {	
      	const books = this.state.books;
    	return (
        	<div className="search-books">
                <div className="search-books-bar">
                	<Link to='/' className="close-search">Close</Link>
      				<SearchForm 
          				query={this.state.query}
  						onQueryChange={this.handleQueryChange} />
      			</div>
        		<SearchResult booksonshelf={this.props.booksonshelf} 
  					books={(books !== undefined && Array.isArray(books)) && books.filter(book => book.imageLinks !== undefined)}
					onUpadateBookShelf={this.props.onUpadateBookShelf} />
         	</div>
        );
    }
}

export default SearchPanel;