import React, { Component, Fragment } from "react";

class BurgerBuilder extends Component {

  render() {
    return (
      <Fragment>
        <div>Burger</div>
        <div>Build Controls</div>
        {this.props.children}
      </Fragment>
    );
  }

}

export default BurgerBuilder;