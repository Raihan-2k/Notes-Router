import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import {BsClipboardPlus} from 'react-icons/bs'
import LocaleContext from '../contexts/LocaleContext';


const AddPageDetail = ({ addNote }) => {
  const { locale } = useContext(LocaleContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onChangeHandler = (r) => {
    setTitle(r.target.value);
  };

  const onInputHandler = (r) => {
    setBody(r.target.innerHTML);
  };

  const onClickHandler = () => {
    addNote({ title, body });
  };

// export class AddPageDetail extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       title: '',
//       body: '',
//     };
//   }

//   onChangeHandler = (r) => {
//     this.setState(() => {
//       return {
//         title: r.target.value,
//       };
//     });
//   };

//   onInputHandler = (r) => {
//     this.setState(() => {
//       return {
//         body: r.target.innerHTML,
//       };
//     });
//   };

//   onClickHandler = (r) => {
//     this.props.addNote(this.state);
//   };

//   render() {
    return (
      <>
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            placeholder={locale === 'id' ? 'Catatan': 'Notes'}
            required
            value={title}
            onChange={onChangeHandler}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder={locale === 'id' ? 'Tambahkan Catatan Anda': 'Add Your Note'}
            contentEditable="true"
            onInput={onInputHandler}
          ></div>
        </div>
        <div className="add-new-page__action">
          <button
            className="action"
            type="button"
            title="Add Note"
            onClick={onClickHandler}
          > 
            <BsClipboardPlus/>
          </button>
        </div>
      </>
    );
  }


AddPageDetail.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default AddPageDetail;
