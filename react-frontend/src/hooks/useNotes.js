import React, {useContext} from 'react'
import NoteContext from '../context/NotesProvider'

function useNotes() {
    return (useContext(NoteContext))
}

export default useNotes;