import React, { Component } from 'react'

class Book extends Component {
  render() {
    let book = this.props.book;
    let image = book.imageLinks ? book.imageLinks.smallThumbnail : ''

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${image}")` }}></div>
          <div className="book-shelf-changer">

            {/* When a new value is selected for a book's shelf, update the value &place that book on the corresponing shelf. */}
            <select value={this.props.shelf} onChange={(e) => { this.props.updateShelf(book, e.target.value) }}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}{book.subtitle ? ': ' + book.subtitle : ''}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book