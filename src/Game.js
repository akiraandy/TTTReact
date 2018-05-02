import React from 'react';
import Board from './Board';
import axios from 'axios';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
            gameOver: false,
            tied: false,
            winner: null,
            HvH: props.gameType,
            currentPlayer: "X"
        }
    }

    handleMove = (move) => {
        if (this.state.HvH) {
            return move
        } else if (!this.state.HvH && this.state.currentPlayer === "X") {
            return move
        } else {
            return null
        }
    }

    componentDidUpdate() {
        if (!this.state.HvH && this.state.currentPlayer === "O") {
            this.handleClick()
        }
    }

    handleClick = (move) => {
        const dataJson = {
            "board": this.state.board,
            "move": this.handleMove(move)
        }
        axios.post('http://localhost:5000/move', dataJson)
        .then(res => {
            this.changeState(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    changeState = (newState) => {
        this.setState({
            board: newState.board,
            gameOver: newState.gameOver,
            tied: newState.tied,
            winner: newState.winner,
            currentPlayer: newState.currentPlayer
        })
    }

    render() {
        const isGameOver = this.state.gameOver
        const isGameTied = this.state.tied
        const winner = this.state.winner
        const showGameOver = isGameOver ? (<div data="gameOver">Game Over!</div>) : (<div></div>)
        const showTie = isGameTied ? (<div data="tied">Game is tied!</div>) : (<div></div>)
        const showWinner = winner ? (<div data="winner">{winner} won!</div>) : (<div></div>)

        return(
            <div>
                {showGameOver}
                {showTie}
                {showWinner}
                <Board board={this.state.board} handleClick={this.handleClick}/>
            </div>
        )
    }
}

export default Game;