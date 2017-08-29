import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditCharacter extends Component {
  static propTypes = {
    character: PropTypes.shape({}).isRequired,
  };
  static defaultProps = {
  };
  state = {};

  componentWillMount() {

  }

  componentWillReceiveProps() {

  }

  render() {
    // const {} = this.props;

    return (
      <form method="post">
        <div>
          <label form="name">Name</label>
          <input id="name" name="name" />
        </div>
        <div>
          <label form="species">Species</label>
          <input id="species" name="species" />
        </div>
      </form>
    );
  }
}

export default EditCharacter;
