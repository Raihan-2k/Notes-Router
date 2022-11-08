import React, { useEffect, useState  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import NoteDetail from '../components/NoteDetail'
import {     archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from '../utils/network-data';
import EmptyPage from './EmptyPage';

let DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);

  const onArchiveHandler = async (id) => {
    await archiveNote(id);
    navigate('/');
  };

  const onUnarchiveHandler = async (id) => {
    await unarchiveNote(id);
    navigate('/');
  };

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    navigate('/');
  };

  useEffect(() => {
    const fetchGetNotes = async () => {
      const { data } = await getNote(id);

      setNotes(data);
    };

    fetchGetNotes();
  }, [id]);

  return notes === undefined ? (
    <EmptyPage />
  ) : (
    <section className="detail-page">
      <h3 className="detail-page__title">{notes.title}</h3>
      <p className="detail-page__createdAt">
        {showFormattedDate(notes.createdAt)}
      </p>
      <div className="detail-page__body">{notes.body}</div>
      <NoteDetail
        id={notes.id}
        title={notes.title}
        archived={notes.archived}
        archiveNote={onArchiveHandler}
        unArchiveNote={onUnarchiveHandler}
        deleteNote={onDeleteHandler}
      />
    </section>
  );
}

export default DetailPage;

// function DetailPageWrapper() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const onArchiveHandler = (id) => {
//     archiveNote(id);
//     navigate('/');
//   };

//   const onUnarchiveHandler = (id) => {
//     unarchiveNote(id);
//     navigate('/');
//   };

//   const onDeleteHandler = (id) => {
//     deleteNote(id);
//     navigate('/');
//   };

//   return (
//     <DetailPage
//       id={id}
//       onDeleteHandler={onDeleteHandler}
//       onUnarchiveHandler={onUnarchiveHandler}
//       onArchiveHandler={onArchiveHandler}
//     />
//   );
// }

// class DetailPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       notes: getNote(props.id),
//     }; 
//   }

//   render() {
//     return this.state.notes === undefined ? (
//       <EmptyPage />
//     ) : (

//       <section className="detail-page">
//       <h3 className="detail-page__title">{this.state.notes.title}</h3>
//       <p className="detail-page__createdAt">
//         {showFormattedDate(this.state.notes.createdAt)}
//       </p>
//       <div className="detail-page__body">{this.state.notes.body}</div>
//       <NoteDetail
//         id={this.state.notes.id}
//         archived={this.state.notes.archived}
//         archiveNote={this.props.onArchiveHandler}
//         unArchiveNote={this.props.onUnarchiveHandler}
//         deleteNote={this.props.onDeleteHandler}
//       />
//     </section>
      

//     )
//   }
// }

// DetailPage.propTypes = {
//   id: PropTypes.string.isRequired,
//   onArchiveHandler: PropTypes.func.isRequired,
//   onUnarchiveHandler: PropTypes.func.isRequired,
//   onDeleteHandler: PropTypes.func.isRequired,
// };

// export default DetailPageWrapper;
