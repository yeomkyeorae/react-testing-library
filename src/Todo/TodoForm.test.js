import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('<TodoForm /> Component', () => {
    it('has input and a button', () => {
        render(<TodoForm />);

        // input이 있는지 확인
        screen.getByPlaceholderText('할 일을 입력하세요');

        // button이 있는지 확인
        screen.getByText('등록');
    });

    it('change input', () => {
        render(<TodoForm />);

        const input = screen.getByPlaceholderText('할 일을 입력하세요');
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });

        // toHaveAttribute: 해당 DOM에 특정 속성이 있는지 확인
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    });

    it('calls onInsert and clears input', () => {
        // jest에서 제공하는 mock 함수. 이 함수가 호출된 다음
        // toBeCalled 같은 matcher를 사용해 함수가 호출됐는지, 어떤 파라미터로 호출됐는지 등을 알 수 있다.
        const onInsert = jest.fn();

        render(<TodoForm onInsert={onInsert} />);

        const input = screen.getByPlaceholderText('할 일을 입력하세요');
        const button = screen.getByText('등록');

        // input 수정하기
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });

        // 버튼 클릭
        fireEvent.click(button);

        // onInsert를 'TDD 배우기' 파라미터로 호출
        expect(onInsert).toBeCalledWith('TDD 배우기');
        // input이 비어져야 함
        expect(input).toHaveAttribute('value', '');
    })
})