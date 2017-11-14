import React from 'react';

class Square extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.props.value) {
      this.props.handleMove(this.props.index);
    }
  }
  
  render() {
    return (
      <div className="square" onClick={this.handleClick}>
        {this.props.value}
      </div>
    )
  }
}

export default Square;
