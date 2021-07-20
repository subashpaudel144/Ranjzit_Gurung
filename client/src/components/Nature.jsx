import React, { Component } from 'react';
import './css/Nature.css';

export class Nature extends Component {
    render() {
        return (
            <div className='nature'>
                <img src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mountain" />
                <img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="desert" />
                <img src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="seabeach" />
                <img src="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="sea" />
                <img src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="waterfall" />
                <img src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="bridge" />
            </div>
        )
    }
}

export default Nature;
