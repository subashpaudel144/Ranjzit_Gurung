import React, { Component } from 'react';
import './css/Nature.css';
import {Image} from 'react-bootstrap';



export class Nature extends Component {
    render() {
        return (
            <div className='nature'>
                <a href="/images/chattan.jpg"><Image src="/images/chattan.jpg" alt="chattan" /></a>
                <a href="/images/jharna.jpg"><img src="/images/jharna.jpg" alt="jharna" /></a>
                <a href="/images/machhapuchchhre.jpg"><img src="/images/machhapuchchhre.jpg" alt="machhapuchchhre" /></a>
                <a href="/images/v_and_m.jpg"><img src="/images/v_and_m.jpg" alt="v_and_m" /></a>
                <a href="/images/village.jpg"><img src="/images/village.jpg" alt="village" /></a>
                <a href="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"><img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="desert" /></a>
                <a href="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"><img src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="seabeach" /></a>
                <a href="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"><img src="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="sea" /></a>
                <a href="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"><img src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="waterfall" /></a>
                <a href="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"><img src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="bridge" /></a>
            </div>
        )
    }
}

export default Nature;
