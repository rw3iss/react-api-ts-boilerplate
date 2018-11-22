import * as React from 'react';
import { Link } from 'react-router-dom';
import './style';

let mounted = true;
export default class SiteHeader extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        const self = this;
        this.state = {
            content: undefined
        };
    }

    render() {
        const self = this;

        return (
            <div id="site-header">

                <div className="free-shipping-blurb">
                    SATISFACTION GUARANTEED: FREE SHIPPING & RETURNS!
                </div>

                <nav>
                    <Link to="/shop">SHOP</Link>
                    <Link to="/story">OUR STORY</Link>
                    <Link to="/">KK AND JAY</Link>
                    <Link to="/learn">LEARN</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/cart">[0]</Link>
                </nav>

            </div>
        );
    }

}
