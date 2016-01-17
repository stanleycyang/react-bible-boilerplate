import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

export default class BookForm extends Component {

  constructor(props) {
    super(props)

    // Set the state of the BookForm Component
    this.state = {
      isbn: '',
      author: '',
      title: ''
    };
  }

  componentDidMount() {
    // Focus on the isbn input
    findDOMNode(this.refs.isbn).focus()
  }

  // Method for handling state of ISBN
  handleISBNChange = (e) => {
    // Set the new ISBN
    this.setState({
      isbn: e.target.value.trim()
    })
  };

  // Method for handling state for Author
  handleAuthorChange = (e) => {
    // Sets the new author
    this.setState({
      author: e.target.value.trim()
    })
  };

  // Method for handling state for Title
  handleTitleChange = (e) => {
    // Sets the new title
    this.setState({
      title: e.target.value.trim()
    })
  };

  handleSubmit = (e) => {
    const { addBook } = this.props
    const { isbn, author, title } = this.state
    e.preventDefault()

    if (!isbn || !author || !title) return

    addBook(this.state)
  };

  render() {
    return (
      <form className="bookForm" onSubmit={ this.handleSubmit }>
        {/* ISBN */}
        <input type="text" placeholder="ISBN" onChange={ this.handleISBNChange } ref="isbn" />

        {/* Author name */}
        <input type="text" placeholder="Author name" onChange={ this.handleAuthorChange } />

        {/* Book title */}
        <input type="text" placeholder="Book title" onChange={ this.handleTitleChange } />

        {/* Submit button */}
        <button type="submit">Add new book</button>

      </form>
    )
  }
}
