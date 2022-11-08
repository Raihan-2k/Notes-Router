import React from 'react';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';
import AddPageDetail from '../components/AddPageDetail';
 
const AddPage = () => {
  const navigate = useNavigate();
  
  const onAddNoteHandler = async (note) => {
    addNote(note);
    navigate('/');
  }
 
  return (
    <section>
      <AddPageDetail addNote={onAddNoteHandler} />
    </section>
  )
}
export default AddPage;