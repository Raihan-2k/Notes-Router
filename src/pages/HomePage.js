import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/network-data';
import EmptyNote from '../components/EmptyNote';
import HomePageAction from '../components/HomePageAction';
import LocaleContext from '../contexts/LocaleContext';
import Loading from '../components/Loading';


const HomePage = () => {
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
        const { data } = await getActiveNotes();
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
    <section className="homepage">
      <h2>{locale === 'id' ? 'Catatan Yang Tersedia' : 'Avaible Notes'}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {loading && <Loading />}
      {filteredNotes.length !== 0 ? (
        <NoteList notes={filteredNotes} />
      ) : (
        <EmptyNote />
      )}
      <HomePageAction />
    </section>
  );
};

export default HomePage;

// function HomePageWrapper() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const keyword = searchParams.get('keyword');
//   function changeSearchParams(keyword) {
//     setSearchParams({ keyword });
//   }
 
//   return(
//   <HomePage defaultKeyword={keyword} 
//   keywordChange={changeSearchParams} />
//   );
// }

// class HomePage extends React.Component {
//   constructor(props) {
//     super(props);
 
//     this.state = {
//       notes: getActiveNotes(),
//       keyword: props.defaultKeyword || '',
//     };

//     this. onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
 
//   }

//   onKeywordChangeHandler(keyword) {
//     this.setState(() => {
//       return {
//         keyword,
//       }
//     });
//     this.props.keywordChange(keyword);
//   }
 
//   render() {
//     const FilterNotes = this.state.notes.filter((note) => {
//       return note.title.toLowerCase().includes(
//         this.state.keyword.toLowerCase()
//         );
//       });
//     return (
//       <section className='homepage'>
//         <h1>Notes</h1>
//         <SearchBar 
//         keyword={this.state.keyword} 
//         keywordChange={this.onKeywordChangeHandler} 
//         />
//         {FilterNotes.length !== 0 ? (
//           <NoteList notes={FilterNotes} />
//         ) : (
//           <EmptyNote />
//         )}
//         <HomePageAction />
//       </section>
//     )
//   }
// }

// HomePage.propTypes = {
//   defaultKeyword: PropTypes.string,
//   keywordChange: PropTypes.func.isRequired,
// };

 
// export default HomePageWrapper;