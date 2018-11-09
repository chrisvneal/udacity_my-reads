import React from 'react'
import Search from './components/Search'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books : []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books}))
  }

  updateShelf = (book, shelf) => {
    console.log(book, shelf)
    BooksAPI.update(book, shelf)      
    

    BooksAPI.getAll().then(books => this.setState({books}))
  }
  render() {    
    return (
      <div className="app">
      <Route exact path="/" render={() => (
        <ListBooks books={this.state.books} updateShelf={this.updateShelf}/>

      ) }/>
      <Route exact path="/search" render={() => (
        <Search updateShelf={this.updateShelf}/>

      ) }/>
      
      </div>
    )
  }
}

export default BooksApp
