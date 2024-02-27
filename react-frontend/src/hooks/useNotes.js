import React, {useContext} from 'react'
import NoteContext from '../context/NotesProvider'

const useNotes = () =>{
    return useContext(NoteContext)
}

export default useNotes;