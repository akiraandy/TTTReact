import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Board from './Board';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TestRenderer from 'react-test-renderer';
import Game from './Game';

const game = <Game board={["0", "1", "2", "3", "4", "5", "6", "7", "8"]}/>

describe("<Game />", () => {
    it ('renders a board', () => {
        const wrapper = shallow(game)
        expect(wrapper.find(Board)).to.have.length(1)
    })

    it('shows when game is over', () => {
        const wrapper = shallow(game)
        wrapper.setState({gameOver: true})
        expect(wrapper.find('[data="gameOver"]')).to.have.length(1)
    })

    it('shows when the game is tied', () => {
        const wrapper = shallow(game)
        wrapper.setState({tied: true})
        expect(wrapper.find('[data="tied"]')).to.have.length(1)
    })

    it('tells you who won', () => {
        const wrapper = shallow(game)
        wrapper.setState({winner: "X"})
        expect(wrapper.find('[data="winner"]')).to.have.length(1)
    })
})