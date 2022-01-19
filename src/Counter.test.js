import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Counter from './Counter';

describe('<Counter /> Component', () => {
    it('matches snapshot', () => {
        const utils = render(<Counter />);
        expect(utils.container).toMatchSnapshot();
    });

    it('has a number and two buttons', () => {
        render(<Counter />);

        // 버튼 숫자 존재 유무 확인
        screen.getByText('0');
        screen.getByText('+1');
        screen.getByText('-1');
    });

    it('increase', () => {
        render(<Counter />);

        const number = screen.getByText('0');
        const plusButton = screen.getByText('+1');
        
        // 클릭 이벤트 2회 발생
        fireEvent.click(plusButton);    // 인자로 (DOM, 이벤트 객체) 받음 
        fireEvent.click(plusButton);

        expect(number).toHaveTextContent('2');  // jest-dom 확장 matcher 사용
        expect(number.textContent).toBe('2');   // textContent 직접 비교
    });

    it('decrease', () => {
        render(<Counter />);

        const number = screen.getByText('0');
        const minusButton = screen.getByText('-1');

        // 클릭 이벤트 2회 발생
        fireEvent.click(minusButton);
        fireEvent.click(minusButton);

        expect(number).toHaveTextContent('-2');
        expect(number.textContent).toBe('-2');
    })
})