import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';

function NoteItem({ title, body, id, createdAt }) {
  return (
   <div className="note-item">
   <h3 className='note-item__title'><Link to={`/DetailPage/${id}`}>{title}</Link></h3>
    <p className='note-item__createdAt'> { showFormattedDate(createdAt)}</p>
    <p className='note-item__body'>{body}</p>
   </div>
 );
}

NoteItem.propType = {
  id: PropType.string.isRequired,
  title: PropType.string.isRequired,
  body: PropType.string.isRequired,
  createdAt: PropType.string.isRequired,
};

export default NoteItem;