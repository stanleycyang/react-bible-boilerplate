import React, { Component, PropTypes } from 'react'

// Import React Components
import BookList from './BookList'
import BookForm from './BookForm'

export default class BookBox extends Component {
  // Seed a list of default props (Harry Potter series)
  static defaultProps = {
    initialBooks: [
      {
        title: 'Twilight',
        author: 'Stephanie Meyer',
        isbn: '0316015849'
      }
    ]
  };

  // Verifies that the array of books exist
  static propTypes = {
    initialBooks: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props)

    // Set the initialBooks prop into the state 'books'
    this.state = {
      books: this.props.initialBooks
    }
  }

  // Add book
  addBook = (book) => {
    let books = this.state.books
    books.unshift(book)
    this.setState({
      books
    })
  };

  // Remove book
  removeBook = (index) => {
    let books = this.state.books
    books.splice(index, 1)
    this.setState({
      books
    })
  };

  render() {
    const { books } = this.state
    return (
      <div className="ui container">
        <h1 className="title ui center aligned dividing header">Book Inventory</h1>
        <BookForm addBook={ this.addBook } />
        <div className="ui items">
          <BookList books={ books } removeBook={ this.removeBook } />
        </div>
      </div>
    )
  }
}
