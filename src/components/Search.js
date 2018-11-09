import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'


class Search extends Component {
  state = {
    query : '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateSearchedBooks(query)
  }

  updateSearchedBooks = (query) => {


    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks.error) {
          this.setState({searchedBooks : []})
        } else {
          this.setState({searchedBooks : searchedBooks})
        }
        
      })
    } else {
      this.setState({searchedBooks : []})
    }



    
  }

  render() {

    // if (this.state.query) {

    // } else {
    //   this.setState({searchedBooks})
    // }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            
            <input 
            type="text" 
            placeholder="Search by title or author" 
            value={this.state.query} 
            onChange={(e) => { this.updateQuery(e.target.value) }}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {              
              this.state.searchedBooks.map(book => {
                let shelf = 'none';
                
                return (
              <li key={book.id}>  <Book book={book} updateShelf={this.props.updateShelf} shelf={shelf}/>     </li>

                )



               } )}


          </ol>
        </div>
      </div>
    )
  }
}

export default Search