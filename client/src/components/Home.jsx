import React, { Component } from 'react';
import Image from './Image';
import Banner from './Banner';
import Personal from './Personal';

export class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Image />
                <Personal />
            </div>
        );
    }
}

export default Home;
