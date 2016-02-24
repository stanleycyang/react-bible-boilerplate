> This is designed to be an all-encompassing guide to essential principles of ReactJS. We will walk through the basics first then scaffold to more complex examples, such as isomorphic ReactJS components. If you following this guide closely and try out every example, this will be the last tutorial you will ever need for ReactJS. 

![ReactJS](https://s3-us-west-1.amazonaws.com/stanleycyang-v2/react-opti.png-1737c88acdedcd3fb513dfb8f338b64ef45cd15a)
 
Bookmark this page for the entirety of your ReactJS career: [GitHub Repository](https://github.com/stanleycyang/react-bible-boilerplate). 

Want to make this guide better? View the [issues](https://github.com/stanleycyang/react-bible-boilerplate/issues)! [Pull requests](https://github.com/stanleycyang/react-bible-boilerplate/pulls) are welcomed!

### ReactJS Intro

[![ReactJS Primer](http://img.youtube.com/vi/lbmurKlQ3Ac/0.jpg)](http://www.youtube.com/watch?v= lbmurKlQ3Ac)

Completion time: **3 hours**

In this guide, you will learn:

- Fundamental ReactJS concepts
- How to build ES2015 components
- The component lifecycle
- Difference between state vs. props
- Building a client-side React app
- Build an isomorphic React app

I recommend you break this read into bite-sized sections to better digest the content. Now let's get into it.

## What is ReactJS?

Simply put, it is a JavaScript library for building User Interfaces **(UI)** created and maintained by Facebook.

ReactJS makes no assumptions about your technology stack, so you can use ReactJS to: 

- Build a widget
- Add a reusable component (header, footer, etc.)
- Build the entire front-end experience (like Facebook)

Just to reiterate, you can incorporate ReactJS into different types of front-end tech stacks (AngularJS, Backbone, etc.) or you can choose to build entire applications out of ReactJS!

## The Virtual DOM

You are going to hear this term all the time. Simply put, ReactJS builds an abstract version of the DOM. ReactJS observes when the data changes, then it will find the difference and re-render what needs to be changed. What makes it fast is:

- Efficient diff algorithms
- Efficient update of sub-tree only

Instead of traditional HTML:

```html
...

<div>
	<h1>This is a header</h1>
</div>
...

```

You will see Component-based programming:

```js
// Import essentials
import React, { Component } from 'react'
import { render } from 'react-dom'

// A basic React Component
class Header extends Component {
	render() {
		return (
			{/* JSX code */}
			<div>
				<h1>This is a reusable header</h1>
			</div>
		)
	}
}

// Render the Component onto the page
render(<Header />, mountNode)
```

In the above example, you will notice that it uses an XML-like syntax to simulate the DOM. This is called **JSX**, a preprocessor step that allows an elegant way to write ReactJS component. Just like XML, JSX tags will have tag names, attributes, and children. 

Using the Virtual DOM provides:

- A simpler programming model
- Better performance
- Server-side rendering
- Modular, reusable components

For more information, check out [Virtual Dom](https://github.com/Matt-Esch/virtual-dom).

## Unidirectional Data Flow

ReactJS implements a one-way data flow. This means that data is passed from the top-down, through **props**. Data is transferred from the top component to its children, so on and so forth. 

```js
...
// A simple component flowing down the props
<Component {...this.props} some="values" />
...
```

Most times, the properties will be explicitly passed down. 

```js
import React, { Component } from 'react'
import { render } from 'react-dom'

class FancyForm extends Component {
	// When component is initialized
	constructor(props) {
		// Bring in the props. We can now reference `this.props`
		super(props)
	}
	render() {
		// Use spread operators to break apart the props
		const { hidden, ...others } = this.props
		// Determine whether to hide to show div
		let formClass = hidden ? 'FormHidden' : 'FormShow'
		return (
			{/* Put in the class, pass all the other props down
			<div className={formClass} {...others} />
			...
		)
	}
}

```

We will see this in action in the future examples.

## Getting started

Getting started is ReactJS is easy. I have provided a boilerplate [here](https://github.com/stanleycyang/react-bible-boilerplate). 

This [repository](https://github.com/stanleycyang/react-bible-boilerplate) contains:

- The boilerplate 
- The walkthrough 
- All the completed examples 

I recommend you **star**, **fork**, or **clone** this repo for your own reference. If you want to follow along, you will need to follow the instructions below:

**Installation:**

```bash
$ git clone https://github.com/stanleycyang/react-bible-boilerplate.git book-inventory
$ cd book-inventory
$ npm install
```

The boilerplate includes:

- Babel
- Webpack
- Express
- ReactJS

Once you have the boilerplate installed, we can get started building some ReactJS components!

Our **roadmap**:

- Client-side ReactJS
- Isomorphic ReactJS

## Book Inventory (client-side React)

This is our current directory structure:

	├── LICENSE
	├── README.md
	├── bin
	│   └── www
	├── client
	│   ├── container
	│   │   └── index.js
	│   ├── index.js
	│   ├── polyfills.js
	│   └── views
	│       ├── index.jade
	│       └── layout.jade
	├── config
	│   └── index.js
	├── nodemon.json
	├── package.json
	├── server
	│   ├── index.js
	│   └── routes
	│       └── index.js
	└── webpack
	    ├── dev.config.js
	    ├── index.js
	    └── prod.config.js

- **client**: contains all client-side code
- **server**: contains all server-side code
- **webpack**: our production and development configurations live here
- **config**: we place all [ENV](http://www.computerhope.com/jargon/e/envivari.htm) variables here
- **bin**: We place any scripts (`www`, `seed`, etc.) in here

### Starting the Express Server

To start the **Express** server, run in the root of the app directory:

```bash
$ npm run dev
$ open http://localhost:3000
```

This will start a web server at `http://localhost:3000` with **hot reloading** and **nodemon**. This means you can see all the changes in real-time when the files are saved!

### Writing Your First React Component

Let's take a look inside of `client/container/index.js`. Here we will find a very basic React component:

```js
// client/container/index.js

// Load in React
import React, { Component, PropTypes } from 'react'

// Create a basic component called App and export the App to use
export default class App extends Component {
  render() {
    return (
      <div>Hello world! Love, Stanley</div>
    )
  }
}
```

**Import & Export**

In ReactJS, it is best practice to build apps in a modular fashion. That means you should split up components into different files to better organize it. 

You will see `import` and `export` all throughout our examples. This helps us break up code into different pages.

You can see the **destructuring assignment syntax** here:

```js
import React, { Component, PropTypes } from 'react'
```
This lets us extract multiple object properties in a single line. Now we no longer have to prefix them with React (ie. React.PropTypes or React.Component).

For more info, here are the MDN docs:

- [Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

**Classes**

In **ES2015+**, you can build React Components incredibly easy with [`classes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). 

JavaScripts classes are syntactical sugar over the prototypical inheritance. It allows us to build templates for objects as such:

```js
class Square {
	// Constructor gets called when an object is intialized
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
}

// Initialize a new Square
let Shape = new Square(10, 10)
```

In React, we use the **extends** keyword to create a class as a child to the React Component. 

```js
class App extends React.Component {
  render() {
    return (
      <div>Hello world! Love, Stanley</div>
    )
  }
}
```

If you're not familiar with Object-oriented programming with JavaScript, I recommend taking a look at [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript).

Notice how we have a **render()** method? For every React component, the render method is **absolutely required**. 

You can **return null or false** to indicate that you don't want to render anything. Behind the scenes, React renders a `<noscript>` tag to work with the React diffing algorithm.

The **render()** function should be pure. It should NOT modify the component state, and it does not read from or write to the DOM. If you want to interact with the browser, you should perform the work in **componentDidMount()** or another component lifecycle method. 

## Component Lifecycle

React Components have built-in methods to handle component lifecycle events. The lifecycle starts from before the component gets mounted onto the page to when the component is dismounted from the page. 

### [Lifecycle methods](https://facebook.github.io/react/docs/component-specs.html):

I will reference the descriptions from the [ReactJS documentation](https://facebook.github.io/react/docs/component-specs.html) in this section. If you are familiar with the component lifecycle methods already, feel free to skip this section.

### Mount methods:

**componentWillMount:**

Usage:

```js
...
class ExampleComponent extends Component {
	...
	componentWillMount() {
		// Run code before component is initially rendered
	}
	...
}
```

This method is invoked once, both on the client and server, immediately before the initial rendering occurs. 

If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.

**componentDidMount:**

Usage:

```js
...
class ExampleComponent extends Component {
	...
	componentDidMount() {
		// Run code after component is initially rendered
	}
	...
}
```

This method is invoked once, only on the client (not on the server), immediately after the initial rendering occurs. 

At this point in the lifecycle, you can access any refs to your children (e.g., to access the underlying DOM representation). 

The componentDidMount() method of child components is invoked before that of parent components.

### Update methods:

**componentWillReceiveProps:**

Usage:

```js
...
class ExampleComponent extends Component {
	...
	componentWillReceiveProps(nextProps) {
		// Invoked when component is receiving new props
	}
	...
}
```

This method is invoked when a component is receiving new props. This method is not called for the initial render.

Use this as an opportunity to react to a prop transition before render() is called by updating the state using this.setState(). The old props can be accessed via this.props. 

Calling this.setState() within this function will not trigger an additional render

**shouldComponentUpdate:**

Usage:

```js
...
class ExampleComponent extends Component {
	...
	shouldComponentUpdate(nextProps, nextState) {
		// Invoked before rendering as new props	or state are being received. 
	}
	...
}
```

This method is invoked before rendering when new props or state are being received. 

This method is not called for the initial render or when forceUpdate is used.

Use this as an opportunity to return false when you're certain that the transition to the new props and state will not require a component update.

**componentWillUpdate:**

Usage:

```js
...
class ExampleComponent extends Component {
	...
	componentWillUpdate(nextProps, nextState) {
		// Invoked immediately before rendering as new props	or state are being received. 
	}
	...
}
```

This method is invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.

Use this as an opportunity to perform preparation before an update occurs.

You cannot use this.setState() in this method. If you need to update state in response to a prop change, use componentWillReceiveProps instead.

**componentDidUpdate:**

Usage:

```js
...
class ExampleComponent extends Component {
	...
	componentDidUpdate(prevProps, prevState) {
	// Invoked immediately after updates are flushed to the DOM
	}
	...
}
```

This method is invoked immediately after the component's updates are flushed to the DOM. This method is not called for the initial render.

Use this as an opportunity to operate on the DOM when the component has been updated.	

### Unmount method:

**componentWillUnmount:**

Usage:

```js
...
class ExampleComponent extends Component {
	...
	componentWillUnmount() {
		// Run code before component is dismounted from DOM
	}
	...
}
```

This method is invoked immediately before a component is unmounted from the DOM.

Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.

With this understanding of the component lifecycle, we can now build out our React client-side app.

## Building the Front-end

This is the app that we will be creating today:

![What our app will look like](https://s3-us-west-1.amazonaws.com/stanleycyang-v2/Screen Shot 2016-01-18 at 7.00.53 PM.png-d5288f410fc69df79ad16eee8b7379524a22947d)

Our webpack is connected to our client-side code via `client/index.js`. I have already connected and rendered our app for you today:

```js
// Imports React
import React from 'react'
// Imports the render method from react-dom
import { render } from 'react-dom'

// Brings in our App
import App from './container'

// Renders the app onto the node #root
render(<App />, document.querySelector('#root'))
```

I want to stop and point out the **render method** from the **react-dom** package. This is important.

The render method takes two arguments: reactElement and domContainerNode

```js
ReactDOM.render(reactElement, domContainerNode)
```

This method helps us actually render the React Components onto the browser. If you take it out, your components will no longer show up on the page. Try it!

## Breaking down the Components

![App Breakdown](https://s3-us-west-1.amazonaws.com/stanleycyang-v2/Screen Shot 2016-01-18 at 7.00.53 PM.png-11b27f714dd57323c2903efef2f629cb1bc7dac1)

Taking a look at this app, it's simple for us to break it down into 5 components:

- BookInventory (The container for our app)
- BookBox (Wraps BookForm and BookList)
- BookForm (Contains the form to post new books)
- BookList (Shows the list of books. Wraps Book)
- Book (The book itself)

We're going to create a `components` folder inside `client`, then create 4 files:

```bash
$ cd client
$ mkdir components
$ cd components
$ touch BookBox.js BookForm.js BookList.js Book.js
```

## Building the BookInventory container

We want to seed some static data into our example. Inside of your container, let's seed an array of books to use. We will adjust our `client/container/index.js` to look like this:

```js
'use strict'

// Import React
import React, { Component, PropTypes } from 'react'

// Import components
import BookBox from '../components/BookBox'

/* polyfills. This allows us to use advanced JS features without being held back by older browsers or versions */
import '../polyfills'

// Seeded book data
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

// Change the name to BookInventory
export default class BookInventory extends Component {
  render() {
  	{/* We want to pass down the seeded book data into our BookBox as props */}
    return (
      <main>
        <BookBox initialBooks={ books } />
      </main>
    )
  }
}
```

If you look inside the **render** method, you will see that we return the BookBox component with initialBooks:

```js
...
return (
  <main>
    <BookBox initialBooks={ books } />
  </main>
)
...
```
What it means is that we created a **prop** called initialBooks and we assigned the **books** data to it. 

Therefore, you can imagine it as the **BookInventory** component passing the books data to its child, **BookBox**.

At this point, you will see an error. However, don't worry too much about it since we haven't created the BookBox component yet.

### What are [props](https://facebook.github.io/react/docs/transferring-props.html)?

Short for **properties**, they are a component's configuration. They flow from the top down and are immutable in the components which receive them. 

A component cannot change its props, but it is responsible for putting together the props of its children components.

When certain data is necessary throughout different parts of an app, its best to pass them down as props. 

## BookBox

BookBox is going to hold our other two components, BookList and BookForm. Inside `client/components/BookBox.js`, let's put the following:

```js
'use strict'

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

  // When the component is initialized
  constructor(props) {
  	 // Passes down the props to this component
    super(props)

    // Set the initialBooks prop into the state 'books'
    this.state = {
      books: this.props.initialBooks
    }
  }


  render() {
    const { books } = this.state
    return (
      <div className="ui container">
        <h1 className="title ui center aligned dividing header">Book Inventory</h1>
      </div>
    )
  }
}
```

Please note that JSX attributes are **camel-cased**. For example, class is className instead. For a detailed list of HTML attributes, you can see them [here](https://facebook.github.io/react/docs/tags-and-attributes.html).

The great part about React components is that you can use **defaultProps** to set the properties if none have been provided, and you can also use **propTypes** to make sure that the properties exists. 

```js
static defaultProps = {
	initialBooks: [
	  {
	    title: 'Twilight',
	    author: 'Stephanie Meyer',
	    isbn: '0316015849'
	  }
	]
};
```
If the prop initialBooks wasn't provided, it would have defaulted to Twilight by Stephanie Meyer.

The static keyword used denotes that this is a [**class property**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static).

```js
static propTypes = {
    initialBooks: PropTypes.array.isRequired
};
```

propTypes will check if the initialBooks property is passed down, and that it is an array. If the checks don't pass, an error will be thrown inside your console. 

For more information, read [here](https://facebook.github.io/react/docs/reusable-components.html). 

In the constructor method, you will also notice that we are setting the state of the component:

```js
constructor(props) {
	 // Passes down the props to this component
	super(props)
	
	// Set the initialBooks prop into the state 'books'
	this.state = {
	  books: this.props.initialBooks
	}
}
```

The default value of state should always be set inside the constructor. In this case, we fed the initialBooks prop into the state of the BookBox component. 

Usually, you don't want to pass the prop into the state because it create 2 or more sources of truths in your app. 

However in this instance, we have stated clearly that we will only be using the initialBooks as the starting state for the component.

### What is state?

A state is component-specific, and starts with a default value set inside of the **constructor** method.

It can be mutated in time (usually due to user events). It's a representation of the component at one point in time - a snapshot. 

A component manages its own state internally, and it has no business changing the state of its children (except on the initial state). 

## Book

We want to create a list of books. The **Book** component should represent the individual books in the list.

In your `client/components/Book.js`:

```js
'use strict'

import React, { Component, PropTypes } from 'react'

export default class Book extends Component {
  // Validate the props flowing in
  static propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const { author, title } = this.props
    return (
      <div className="book">
        <h2 className="title">
          { title }
        </h2>
        <p className="author">{ author }</p>
      </div>
    )
  }
}
```

In the Book component, we will validate that the author and title (string) are passed down into it. 

After receiving the props, the component will simply show them inside a `<h2>` and `<p>` tag.

Now onto the list itself.

## BookList

The BookList should render the array of books. We will need to make use of the JS [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function to achieve this.

In your `client/components/BookList.js`:

```js
'use strict'

import React, { Component, PropTypes } from 'react'
import Book from './Book'

export default class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    removeBook: PropTypes.func.isRequired
  };

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
      	 {/* render the book list */}
        { bookNodes }
      </div>
    )
  }
}
```

The complexity in this component is the **removeBook** method. Since books are passed down from the **BookBox** component, we will need to write the removeBook method inside of BookBox component to modify the state (remember, props need to be modified from the source). Then flow the function **removeBook** into the **BookList component**.

Inside of the `client/components/BookBox.js`, add the **removeBook** method and insert the BookList component into the render method:

```js
...
export default class BookBox extends Component {
	...
  constructor(props) {
    super(props)

    // Set the initialBooks prop into the state 'books'
    this.state = {
      books: this.props.initialBooks
    }
  }

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
        <div className="ui items">
          <BookList books={ books } removeBook={ this.removeBook } />
        </div>
      </div>
    )
  }
}
```

At this point in time, you should see the list rendered on your page! You should also be able to use the deletion feature to remove any of the seeded books. 

The last part of our client app: The book posting feature.

## BookForm

We need to create a form to allow users to post new books. 

In your `client/components/BookForm.js`, put the following:

```js
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
```

In this example, you are going to use the component's state to manage the different inputs. Therefore, you have to set the initial state:

```js
...
  constructor(props) {
    super(props)

    // Set the state of the BookForm Component
    this.state = {
      isbn: '',
      author: '',
      title: ''
    };
  }
...
```

You want to focus on the **ISBN** input when the page is loaded.

```js
...
  componentDidMount() {
    // Focus on the isbn input
    findDOMNode(this.refs.isbn).focus()
  }
...
{/* ISBN */}
  <div className="field">
    <label>ISBN</label>
    <input type="text" placeholder="ISBN" onChange={ this.handleISBNChange } ref="isbn" value={ this.state.isbn } />
  </div>
...
```

[Ref](https://facebook.github.io/react/docs/more-about-refs.html) allows you find DOM markup rendered by a component. In this case, ref was used to grab the ISBN input to focus on it on component mount with the help of [findDOMNode](https://facebook.github.io/react/docs/top-level-api.html).

### POSTing the form

To post the form, we will create 4 different methods: 

- handleISBNChange
- handleAuthorChange
- handleTitleChange
- handleSubmit

Essentially, they will mutate the state when the user types into them.

```js
  handleTitleChange = (e) => {
    // Sets the new title
    this.setState({
      title: e.target.value.trim()
    })
  };
```

The **setState** method is what we can use to mutate the state. When the user finally finishes typing the input, the state of **BookForm** will contain the book object to be posted.

Finally, we want to add a handleSubmit method to the form to handle the POST.

```js
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
```

Notice how we need an **addBook** prop to be flowed down? Let's go back and create the **addBook** method in **BookBox**.

In `client/components/BookBox`, modify it to look like this:

```js
...

export default class BookBox extends Component {
  ...

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

  ...

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
```

The **addBook** method will put the new book object into the front of the array, and then change the state to include the newest book.

At this point, you should be able to post new books into the Book Inventory!

If your goal is to learn how to create purely client-side React apps, you can conclude the tutorial here. 

However, if you want to learn how to make isomorphic React apps, continue onto the next section!

## Isomorphic Book Inventory App

	i-so-mor-phic: corresponding or similar in form and relations.

**Isomorphic JavaScript** means that JavaScript is rendered on the server AND the client!

It is pretty amazing. Don't believe me? Check out this [AirBnb blog](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/) on Isomorphic JavaScript.

The primary benefits of doing isomorphic JavaScript are:

- Better UX
- Search engine indexability
- Easier code maintainence

Since the components will be initially loaded from the server-side, they won't have that initial awkward loading state that you will see in most modern apps. This allows them to be easily indexable while making the UX better.

Let's make a copy of the client-side Book Inventory app and call it isomorphic-book-inventory:


```js
$ cp -r book-inventory isomorphic-book-inventory
$ cd isomorphic-book-inventory
```

All you need to do to make our current app is to make a slight adjustment to our current `server/routes/index.js`:

```js
import React, { createFactory } from 'react'
import { renderToString } from 'react-dom/server'
import { Router } from 'express'
import App from '../../client/container'

const router = Router()
const component = createFactory(App)

// For our SPA
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Book Inventory',
    component: renderToString(component({}))
  })
})

export default router
```

Two important things we need to focus on here:

- createFactory
- renderToString

### What is a Factory?

A **ReactElement-factory** is simply a function that generates a ReactElement with a particular type property.

The source code looks like this:

```js
function createFactory(type) {
  return React.createElement.bind(null, type);
}
```

When coupled with **[renderToString](https://facebook.github.io/react/docs/top-level-api.html)**, you can render the ReactElement to its initial HTML. This then send the markup down on the initial request for faster page loads and allow search engines to crawl the pages for SEO purposes.

If you're getting a hot reloading error, adjust your `.babelrc` to this:

```js
{
  "presets":  ["es2015", "react", "stage-0"],
  "plugins":  ["transform-decorators-legacy", "transform-class-properties", "transform-object-rest-spread", "syntax-async-functions","transform-regenerator", "transform-runtime"]
}
```

For handling the fetch error, empty out the `polyfills.js`.


## Modifying your Jade file

Now you just need to render the **component** variable into the root (`client/views/index.jade`):

```jade
extends layout

block content
  div#root!=component
  script(src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js" defer)
  script(src="/dist/bundle.min.js" defer)
```

Now our app is render from the server! Your isomorphic app is complete!

If you want your app to look like mine, you can install semantic UI into your app and it'll instantly be prettified: [Getting Started - Semantic UI](http://semantic-ui.com/introduction/getting-started.html)

## Flux Architecture

Interested in learning about the **Flux** architecture? I recommend reading the  [**Mastering React Redux**](https://www.stanleycyang.com/tutorials/mastering-react-redux) tutorial to learn the fundamentals of [Redux](https://www.stanleycyang.com/tutorials/mastering-react-redux).

## Conclusions

Through this guide, you have learned:

- The fundamental concepts of ReactJS
- Built a client-side React app
- Built an isomorphic React app

Building in ReactJS is awesome. You can choose to use it in parts, or use it for an entire application. With a great community, you can count on ReactJS to continue improving for the long-haul!

Enjoyed the ReactJS Bible? Try out [**hippy**](https://github.com/stanleycyang/hippy), the ReactJS component generator!

You are also welcome to use the [boilerplate](https://github.com/stanleycyang/react-bible-boilerplate) as the starting point for your future projects. 

If there are any additional concepts on ReactJS you want to know about, please leave a comment below and I will write what the public demands for the next tutorial!
