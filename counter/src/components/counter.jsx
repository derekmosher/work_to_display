import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   // value: 0
  //   value: this.props.counter.value
  // };
  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  //   //console.log("asdf = " + this);
  // };

  render() {
    console.log("hi", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
