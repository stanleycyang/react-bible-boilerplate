import React, { Component, PropTypes } from 'react'
import Book from './Book'

export default class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    removeBook: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props)
  }

  render() {
    const { removeBook } = this.props

    // Create a new array with map and store it within bookNodes
    let bookNodes = this.props.books.map((book, i) => {
      return (
        <div key={ book.isbn } className="ui segment">
          <Book author={ book.author } title={ book.title } />
          <br />
          <button className="ui red right labeled icon button" onClick={ removeBook.bind(null, i) }>
            <i className="trash icon"></i>
            Delete
          </button>
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
