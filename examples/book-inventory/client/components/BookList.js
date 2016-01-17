import React, { Component, PropTypes } from 'react'
import Book from './Book'

export default class BookList extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    // Create a new array with map and store it within bookNodes
    let bookNodes = this.props.books.map((book) => {
      return (
        <div key={ book.isbn }>
          <Book author={ book.author } title={ book.title } />
        </div>
      )
    })

    return (
      <div className="bookList">
        { bookNodes }
      </div>
    )
  }
}
