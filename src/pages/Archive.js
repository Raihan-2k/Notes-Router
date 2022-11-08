import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import EmptyNote from '../components/EmptyNote';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
import Loading from '../components/Loading';

const ArchivePage = () => {
  const { locale } = useContext(LocaleContext);

  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  useEffect(() => {
    const fetchGetNotes = async () => {
      try {
        const { data } = await getArchivedNotes();
        setNotes(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGetNotes();
  }, []);

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="archives-page">
      <h2>{locale === 'id' ? 'Catatan Arsip' : 'Archived Note'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {loading && <Loading />}
      {filteredNotes.length !== 0 ? (
        <NoteList notes={filteredNotes} />
      ) : (
        <EmptyNote />
      )}
    </section>
  );
};

export default ArchivePage;

// function ArchivePageWrapper() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const keyword = searchParams.get('keyword');

//   function changeSearchParams(keyword) {
//     setSearchParams({ keyword });
//   }

//   return (
//     <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
//   );
// }

// class ArchivePage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       notes: getArchivedNotes(),
//       keyword: props.defaultKeyword || '',
//     };
//   }

//   onKeywordChangeHandler = (keyword) => {
//     this.setState({
//       keyword,
//     });

//     this.props.keywordChange(keyword);
//   };

//   render() {
//     const FilterNotes = this.state.notes.filter((note) => {
//       return note.title
//         .toLowerCase()
//         .includes(this.state.keyword.toLowerCase());
//     });

//     return (
//       <section className="homepage">
//         <h2>Archive</h2>
//         <SearchBar
//           keyword={this.state.keyword}
//           keywordChange={this.onKeywordChangeHandler}
//         />
//         {FilterNotes.length !== 0 ? (
//           <NoteList notes={FilterNotes} />
//         ) : (
//           <EmptyNote />
//         )}
//       </section>
//     );
//   }
// }

// ArchivePage.propTypes = {
//   defaultKeyword: PropTypes.string,
//   keywordChange: PropTypes.func.isRequired,
// };

// export default ArchivePageWrapper;
