import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Board from './Board';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TestRenderer from 'react-test-renderer';
import Square from './Square';


describe("<Board />", () => {
    it ('renders 9 squares', () => {
        
        const wrapper = shallow(<Board board={["0", "1", "2", "3", "4", "5", "6", "7", "8"]}/>)
        expect(wrapper.find(Square)).to.have.length(9)
    })
})
