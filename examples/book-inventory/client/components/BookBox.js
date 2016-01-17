import React, { Component, PropTypes } from 'react'

// Import React Components
import BookList from './BookList'
import BookForm from './BookForm'

export default class BookBox extends Component {
  // Seed a list of default props (Harry Potter series)
  static defaultProps = {
    books: [
      {
        title: 'Twilight',
        author: 'Stephanie Meyer',
        isbn: '0316015849'
      }
    ]
  };

  // Verifies that the array of books exist
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    const { books } = this.props
    return (
      <div>
        <h1>Book Inventory</h1>
        <BookForm />
        <BookList books={ books } />
      </div>
    )
  }
}
