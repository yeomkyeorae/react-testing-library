import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile /> Component', () => {
    it('matches snapshot', () => {
        // render 함수를 사용하면 다양한 query와 container를 포함한다.
        // container는 해당 컴포넌트의 최상위 DOM를 가르킨다.
        const utils = render(<Profile username="yeom" name="kyeorae" />);

        // 스냅샵 테스팅: 렌더링 결과가 이전 결과와 일치하는지 확인하는 작업
        expect(utils.container).toMatchSnapshot();
    });

    it('shows the props correctly', () => {
        render(<Profile username="yeom" name="kyeorae" />);

        // ByText: 엘리먼트가 가지는 텍스트 값으로 DOM을 선택
        screen.getByText('yeom');
        screen.getByText('(kyeorae)');
        screen.getByText(/yeom/);
    })
});

/*
메뉴얼에서 아래 우선순위에 따라 쿼리를 사용할 것을 권장
getByLabelText
getByPlaceholderText
getByText
getByDisplayValue
getByAltText
getByTitle
getByRole
getByTestId
*/