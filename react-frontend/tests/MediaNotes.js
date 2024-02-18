// import {render} from '@testing-library/react';
// import {useSelector} from 'react-redux';

// import ToDoList from '../TodoList';

// jest.mock('react-redux');


// const todos = [
//     { id: '123', text: 'React', completed: false},
//     { id: '124', text: 'React', completed: false},
// ]


// describe('TodoList', () =>{
//     it('should TodoList with empty todos', () =>{
//             //useSelector.mockReturnValue([])
//             jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([]);           //jest.spyOn() аозаращает функцию, тоже можно быо бы где-то использовать
//     })

// })

// //можно дополнительно экспортировать и проверить экш(action) из самого тестируемого кода, но это не так принципиально
// //результат просто совпадает с ранее нарисованным снепшотом(snapshoot)