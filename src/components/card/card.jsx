import { Component } from "react";
import './cardStyles.css';

class Card extends Component {
  render() {
    const { id, title, author } = this.props;
    return (
      <div key={id}>
        <div className="card-container">
          <img alt="books" src={`https://picsum.photos/seed/${id}/200/200`} />
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
      </div>
    );
  }
}

export default Card;
