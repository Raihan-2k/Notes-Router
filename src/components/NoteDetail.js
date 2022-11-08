import PropTypes from 'prop-types';
import React from 'react';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {FaFileArchive} from 'react-icons/fa'
import {FaRegFileArchive} from 'react-icons/fa'

const NoteDetail = ({
  id,
  archived,
  archiveNote,
  deleteNote,
  unArchiveNote,
}) => {
  const onArchiveHandler = () => {
    archiveNote(id);
  };

  const onUnarchiveHandler = () => {
    unArchiveNote(id);
  };

  const onDeleteHandler = () => {
        deleteNote(id);
  };
  

  return (
    <div className="detail-page__action">
      {archived ? (
        <button 
        className="action"
        type="button"
        title="Aktifkan"
        onClick={onUnarchiveHandler}
        >
          <FaRegFileArchive/>
        </button>
      ) : (
        <button
          className="action"
          type="button"
          title="Arsipkan"
          onClick={onArchiveHandler}
        >
          <FaFileArchive/>
        </button>
      )}

      <button
        className="action"
        type="button"
        title="Hapus"
        onClick={onDeleteHandler}
      >
        <RiDeleteBin6Line/>
      </button>
    </div>
  );
};

NoteDetail.propTypes = {
  id: PropTypes.string,
  archived: PropTypes.bool,
  archiveNote: PropTypes.func,
  unArchiveNote: PropTypes.func,
  deleteNote: PropTypes.func,
};

export default NoteDetail;
