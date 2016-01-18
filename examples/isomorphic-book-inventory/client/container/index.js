import React, { Component, PropTypes } from 'react'

// Import components
import BookBox from '../components/BookBox'

let books = [
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J. K. Rowling',
    isbn: '0747532699'
  },
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J. K. Rowling',
    isbn: '0439064864'
  },
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J. K. Rowling',
    isbn: '0439136350'
  },
  {
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J. K. Rowling',
    isbn: '0439139600'
  },
  {
    title: 'Harry Potter and the Order of the Phoenix',
    author: 'J. K. Rowling',
    isbn: '0439358078'
  },
  {
    title: 'Harry Potter and the Half-Blood Prince',
    author: 'J. K. Rowling',
    isbn: '0439785960'
  },
  {
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J. K. Rowling',
    isbn: '0545139708'
  }
]

export default class BookInventory extends Component {
  render() {
    return (
      <main>
        <BookBox initialBooks={ books } />
      </main>
    )
  }
}
