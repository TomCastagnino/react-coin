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
        let num = this.state.timesFlip + 1;
        let faceTimes = this.state.faceSide;
        let tailTimes = this.state.tailSide;
        if (randSide === 'face') {
            faceTimes += 1;
        } else {
            tailTimes += 1;
        }
        this.setState({timesFlip: num, side: randSide, faceSide: faceTimes, tailSide: tailTimes});
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