import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                {/* Filter through books in state and select books whose shelf property is 'currentlyReading' */}
                {this.props.books.filter(book => book.shelf === 'currentlyReading').map(returnedBook => (
                    <li key={returnedBook.id}>
                      <Book book={returnedBook} updateShelf={this.props.updateShelf} shelf="currentlyReading"/>
                    </li> 
                  ))}                    
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {/* Filter through books in state and select books whose shelf property is 'wantToRead' */}
                  {this.props.books.filter(book => book.shelf === 'wantToRead').map(returnedBook => (
                    <li key={returnedBook.id}>
                      <Book book={returnedBook} updateShelf={this.props.updateShelf} shelf="wantToRead"/>
                    </li> 
                  ))}                                           
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                {/* Filter through books in state and select books whose shelf property is 'read' */}
                {this.props.books.filter(book => book.shelf === 'read').map(returnedBook => (
                    <li key={returnedBook.id}>
                      <Book book={returnedBook} updateShelf={this.props.updateShelf} shelf="read"/>
                    </li> 
                  ))}                     
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks