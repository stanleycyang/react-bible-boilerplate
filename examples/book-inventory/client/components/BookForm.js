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

    addBook({
      isbn,
      author,
      title
    })

    this.setState({
      isbn: '',
      author: '',
      title: ''
    })

  };

  render() {
    return (
      <form className="bookForm ui form" onSubmit={ this.handleSubmit }>

        <div className="three fields">
          {/* ISBN */}
          <div className="field">
            <label>ISBN</label>
            <input type="text" placeholder="ISBN" onChange={ this.handleISBNChange } ref="isbn" value={ this.state.isbn } />
          </div>

          {/* Author name */}
          <div className="field">
            <label>Author</label>
            <input type="text" placeholder="Author name" onChange={ this.handleAuthorChange } value={ this.state.author } />
          </div>

          {/* Book title */}
          <div className="field">
            <label>Title</label>
            <input type="text" placeholder="Book title" onChange={ this.handleTitleChange } value={ this.state.title } />
          </div>
        </div>

        {/* Submit button */}
        <button className="fluid ui button green right labeled icon" type="submit">
          <i className="right arrow circle outline icon"></i>
          Add new book
        </button>

      </form>
    )
  }
}
