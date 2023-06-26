import React, { Component } from "react";

export class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>The way of kings</li>
          <li>The way of the wind</li>
          <li>Disaster Class Hero</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
