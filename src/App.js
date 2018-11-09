import React from 'react'
import Search from './components/Search'
import ListBooks from './components/ListBooks'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books : []
  }

  setBooksState = () => {
    BooksAPI.getAll().then(books => this.setState({books}))
  }

  // After component mounts, update the state of books
  componentDidMount() {
    this.setBooksState()
  }

  // Update a book's shelf then update the state of books
  updateShelf = (book, shelf) => {    
    BooksAPI.update(book, shelf)          

    this.setBooksState()
  }

  // render application
  render() {    
    return (
      <div className="app">
        <Route exact path="/" render={() => ( <ListBooks books={this.state.books} updateShelf={this.updateShelf} /> )} />
        <Route path="/search" render={() => ( <Search books={this.state.books} updateShelf={this.updateShelf} /> )} />      
      </div>
    )
  }
}

export default BooksApp


