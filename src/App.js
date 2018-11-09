import React from 'react'
import Search from './components/Search'
import ListBooks from './components/ListBooks'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'

// TODO: Add comments

class BooksApp extends React.Component {

  state = {
    books : []
  }

  setBooksState = () => {
    BooksAPI.getAll().then(books => this.setState({books}))
  }

  componentDidMount() {
    this.setBooksState()
  }

  updateShelf = (book, shelf) => {    
    BooksAPI.update(book, shelf)          

    this.setBooksState()
  }

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


