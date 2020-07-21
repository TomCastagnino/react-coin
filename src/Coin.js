import React, {Component} from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        let face = 'https://tinyurl.com/react-coin-heads-jpg'
        let tail = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.m-Gbd6TTPjmlf0Q765DawgHaHf%26pid%3DApi&f=1'
        return (
            <div className='Coin'>
                <img src={this.props.side === 'face' ? face: tail } img/>
        <h4>Out of {this.props.times} flips, there have been {this.props.face} heads and {this.props.tail} tails.</h4>
            </div>
        )
    }
}

export default Coin;