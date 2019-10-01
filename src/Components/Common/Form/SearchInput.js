
import React, { Component } from 'react';
// import _ from 'lodash';
import cx from 'classnames';

const onInputChange = (name, e, that) => {
  that.setState({
    [name]: e.target.value
  })
}
class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputName: '',
      focusin: false
    }
  }
  handleChange = (e) => {
    onInputChange('inputName', e, this)
  }

  handleFocus = (e) => {
    this.setState({
      focusin: true
    })
  }

  handleBlur = (e) => {
    this.setState({
      focusin: false
    })
    if (!this.state.inputName.trim()) {
      this.setState({
        inputName: '',
        placeholder: this.props.placeholder
      })
    }
  }
  render() {
    const [props, state] = [this.props, this.state];
    return (
      <input
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        name={props.name}
        type="text"
        value={state.inputName}
        placeholder={props.placeholder}
        className={cx(props.className, { 'on': state.focusin })}
        autoComplete={props.autoComplete}
      />

    )
  }
}


export default SearchInput;