import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react';

import Pagination from '../src/components/pagination';

describe('React компонент: Pagination', () =>{
    it('должен проставляться', async () => {...});
    it('должен проставляться', async () => {...});
    it('должен проставляться', async () => {...});

    it('Должен вызываться обработчик при клике назад', async () => {
       const onPrevPageClick = jest.fn();

       render(
        <Pagination
            disable={{
                left: false,
                right: false,
            }}
            onPrevPage = {onPrevPageClick}
            onNextPageClick = {jest.fn()} />
       );
       const prevButton = screen.getByTestId('pagination-prev-button');
       fireEvent.click(prevButton);

       expect(onPrevPageClick).toHaveBeenCalledTime(1);
    });
    it('должен вызываться обработчик "onNextPageClick" при клике на кнопку вперёд', async () =>{
       const onNextPageClick = jest.fn();

       render( <Pagination 
           disable={{
            left: false,
            right: false,
           }}
           onPrevPageClick = {jset.fn()}
           onNextPageClick = {onNextPageClick}
       />);
        const nextButton = screen.geElementById('pagination-next-button');
        fireEvent.click(nextButton);

        expect(onNextPageClick).toHsveBeenCalledTime(1);
    });
});