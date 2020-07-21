import React, {Component} from 'react';
import './CoinFlipper.css';
import Coin from './Coin';

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = { timesFlip: 0, side: 'face', faceSide: 0, tailSide: 0 };
        this.clickHandler = this.clickHandler.bind(this);
    }

    getRandFace() {
        let coin = ['face', 'tail'];
        return coin[Math.floor(Math.random() * coin.length)];
    }

    clickHandler(e) {
        let randSide = this.getRandFace();
        this.setState(st => {
            const newState = {
                ...st,
                side: randSide,
                timesFlip: st.timesFlip + 1
            }
            if (randSide === 'face') {
                newState.faceSide += 1;
            } else {
                newState.tailSide += 1;
            }
            return newState;
        })
    }

    render() {
        return (
            <div>
                <Coin side={this.state.side} times={this.state.timesFlip} face={this.state.faceSide} tail={this.state.tailSide}/>
                <button onClick={this.clickHandler}>Flip me!</button>
            </div>
        )
    }

}

export default CoinFlipper;