import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {BsClipboardPlus} from 'react-icons/bs'

export class AddNewPageInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  onChangeHandler = (r) => {
    this.setState(() => {
      return {
        title: r.target.value,
      };
    });
  };

  onInputHandler = (r) => {
    this.setState(() => {
      return {
        body: r.target.innerHTML,
      };
    });
  };

  onClickHandler = () => {
    this.props.addNote(this.state);
  };

  render() {
    return (
      <>
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            placeholder="Catatan rahasia"
            value={this.state.title}
            onChange={this.onChangeHandler}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="Sebenarnya saya adalah ...."
            contentEditable="true"
            onInput={this.onInputHandler}
          ></div>
        </div>
        <div className="add-new-page__action">
          <button
            className="action"
            type="button"
            title="Simpan"
            onClick={this.onClickHandler}
          >
            <BsClipboardPlus/>
          </button>
        </div>
      </>
    );
  }
}

AddNewPageInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default AddNewPageInput;
