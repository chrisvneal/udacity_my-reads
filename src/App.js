import React from 'react'
import Search from './components/Search'
import ListBooks from './components/ListBooks'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
      <ListBooks />
      </div>
    )
  }
}

export default BooksApp
