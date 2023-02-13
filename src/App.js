import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      searchField: "",
    };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1d0ed6fa17msha83eb84cf0098bap1d9d48jsn23043f2b80e0",
        "X-RapidAPI-Host": "fake-data3.p.rapidapi.com",
      },
    };

    fetch("https://fake-data3.p.rapidapi.com/fk/books", options)
      .then((response) => response.json())
      .then((response) => {
        const book = response.data;
        this.setState(() => {
          return { books: book };
        });
      })
      .catch((err) => console.error(err));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { books, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredBooks = books.filter((book) => {
      return book.title.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title"> Book Library </h1>
        <SearchBox className='search-box-book' onChangeHandler={onSearchChange} placeholder='search books...'/>
        <CardList listOfBooks={filteredBooks} />
      </div>
    );
  }
}

export default App;
