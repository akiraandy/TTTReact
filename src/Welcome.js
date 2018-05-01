import React from 'react';
import Game from './Game'

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
            gameOver: false,
            tied: false,
            winner: null,
            HvH: null,
            currentPlayer: "X",
            playing: false
        }
    }

    playGame = (gameType) => {
        if (gameType == "HvH") {
            this.setState({HvH: true, playing: true})
        } else {
            this.setState({HvH: false, playing: true})
        }
    }

    render() {
        let display = <div></div>
        if (!this.state.playing) {
            display = (
                <div>
                <p>Which game would you like to play?</p>
                <button data="HvH" onClick={() => this.playGame("HvH")}>Human vs. Human</button>
                <button data="HvC" onClick={() => this.playGame("HvC")}>Human vs. Computer</button>
                </div>
            )} else {
            display = <Game gameType={this.state.HvH}/>
        }
        return (
            <div>
                {display}
            </div>
        )
    }
}

export default Welcome;