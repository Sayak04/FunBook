import { Component } from "react";
import Card from "../card/card";
import "./CardListStyles.css";

class CardList extends Component {
  render() {
    const { listOfBooks } = this.props;
    return (
      <div className="card-list">
        {listOfBooks.map((book) => {
          const { id, title, author } = book;
          return (
            <Card id={id} title={title} author={author} />
          );
        })}
      </div>
    );
  }
}

export default CardList;
