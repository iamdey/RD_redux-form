import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form'

class Input extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    input: PropTypes.shape({}),
  };

  static defaultProps = {
    input: {},
  };

  render() {
    const { inputName, input } = this.props;

    return (
      <div>
        <label form={inputName}>{inputName}</label>
        <input id={inputName} {...input} />
      </div>
    );
  }
}

class EditCharacter extends PureComponent {
  render() {
    const { handleSubmit, reset, pristine } = this.props;
    return (
      <form method="post" onSubmit={handleSubmit}>
        <Field component={Input} name="name" label="Name" />
        <Field component={Input} name="species" label="Species" />
        <div>
          <button onClick={reset} disabled={pristine && true}>Cancel</button>
          <button type="submit" disabled={pristine && true}>Submit</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  destroyOnUnmount: false,
})(EditCharacter);
