import React, { Component } from 'react';
import Image from './Image';
import Banner from './Banner';
import Personal from './Personal';
import Insta from './Insta';
import Footer from './Footer';

export class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Image />
                <Insta />
                <Personal />
                <Footer />
            </div>
        );
    }
}

export default Home;
