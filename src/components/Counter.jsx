import React, { Component } from "react";

class Counter extends Component {
  //USING METHOD TO DINAMICALLY RENDER ELEMENTS
  //ARROW FUNCTION TO ACCESS .THIS

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} // ARROW FUNC OR .bind(this) TO ACCESS .THIS IN THE METHOD
          className="btn btn-secondary btn-sm pb-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)} // ARROW FUNC OR .bind(this) TO ACCESS .THIS IN THE METHOD
          className="btn btn-secondary btn-sm pb-2 ml-2"
        >
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm pb-2 m-2"
        >
          Delete
        </button>
        <br />
        {/* LOGICAL "AND" OPERATOR RENDER */}
        {/* IF BOTH ARE TRUTHLY JS WILL RETUN LAST ONE */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 pb-1 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // DESTRUCTURING
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
