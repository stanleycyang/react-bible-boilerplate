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
      isbn: e.target.value
    })
  };

  // Method for handling state for Author
  handleAuthorChange = (e) => {
    // Sets the new author
    this.setState({
      author: e.target.value
    })
  };

  // Method for handling state for Title
  handleTitleChange = (e) => {
    // Sets the new title
    this.setState({
      title: e.target.value
    })
  };

  addBook = (e) => {
    e.preventDefault()
    e.stopPropagation()

  };

  render() {
    const { addBook } = this.props
    return (
      <form className="bookForm" onSubmit={ this.addBook }>
        {/* ISBN */}
        <input type="text" placeholder="ISBN" onChange={ this.handleAuthorChange } ref="isbn" />

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
