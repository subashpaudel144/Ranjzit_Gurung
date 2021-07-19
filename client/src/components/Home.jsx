import React, { Component } from 'react';
import Image from './Image';
import Banner from './Banner';
import Personal from './Personal';
import Insta from './Insta';

export class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Image />
                <Insta />
                <Personal />
            </div>
        );
    }
}

export default Home;
