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

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books}))
  }

  updateShelf = (book, shelf) => {    
    BooksAPI.update(book, shelf)          

    BooksAPI.getAll().then(books => this.setState({books}))
  }
  render() {    
    return (
      <div className="app">
        <Route exact path="/" render={() => ( <ListBooks books={this.state.books} updateShelf={this.updateShelf} /> ) } />
        <Route path="/search" render={() => ( <Search updateShelf={this.updateShelf} books={this.state.books} /> )} />      
      </div>
    )
  }
}

export default BooksApp
