import React from 'react';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';
import AddPageDetail from '../components/AddPageDetail';
 
function AddPage() {
  const navigate = useNavigate();
  
  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }
 
  return (
    <section>
      <h2>Tambah kontak</h2>
      <AddPageDetail addNote={onAddNoteHandler} />
      
    </section>
  )
}
export default AddPage;