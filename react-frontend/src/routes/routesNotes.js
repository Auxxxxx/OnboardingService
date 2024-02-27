import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute';
import InnerNote from '../components/templateNote';

//получение данных из notes

export const useNoteRoute = () => {
    <Route path='/notes/:id' element={<InnerNote />} />
}
