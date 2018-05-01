import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TestRenderer from 'react-test-renderer';
import Welcome from './Welcome';
import Game from './Game';

describe("<Welcome />", () => {
    it ('renders two buttons', () => {
        const wrapper = shallow(<Welcome />)
        expect(wrapper.find('button')).to.have.length(2)
    })

    it('shows a game after clicking button', () => {
        const wrapper = shallow(<Welcome />)
        wrapper.find('[data="HvH"]').simulate('click')
        expect(wrapper.find(Game)).to.have.length(1)
    })
})