import * as React from 'react';
import { Link } from 'react-router-dom';

//import DocumentMeta from 'react-document-meta';
import ContentService from '../../services/ContentService';

import './style';

const meta = {
    title: 'Homepage Meta Title',
    description: 'I am a description, and I can create multiple tags',
    canonical: 'http://example.com/path/to/page',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
};

let mounted = true;
export default class HomePage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        const self = this;
        this.state = {
            content: undefined
        };
    }

    async componentDidMount() {
        // fetch data
        let r = await ContentService.getPageContent('homepage') as any;
        console.log("got homepage content", r);

        this.setState({content: r.content});
    }

    render() {
        const content = this.state.content;
        return (
            <div className="home-view">
                { this.state.content &&
                    <div>
                        <div className="carousel">
                            <ul className="slides">
                                <li>{content['carousel1-text']}</li>
                                <li>{content['carousel2-text']}</li>
                                <li>{content['carousel3-text']}</li>
                            </ul>
                        </div>

                        <div className="featured-products">
                            {content['featured-products-header']}
                        </div>
                        
                        <div className="model-carousel shirttail">
                            {content['shirttail-tout-header']}
                            {content['shirttail-tout-text']}
                            <ul className="models">
                                { content['shirttail_productmodels'].map((o,i) => {
                                        return (
                                            <li key={i}>{JSON.stringify(o)}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>

                        <div className="model-carousel sockless">
                            {content['sockless-tout-header']}
                            {content['sockless-tout-text']}
                            <ul className="models">
                                { content['sockless_productmodels'].map((o,i) => {
                                        return (
                                            <li key={i}>{JSON.stringify(o)}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>

                        <div className="model-carousel suspenders">
                            {content['suspenders-tout-header']}
                            {content['suspenders-tout-text']}
                            <ul className="models">
                                { content['suspenders_productmodels'].map((o,i) => {
                                        return (
                                            <li key={i}>{JSON.stringify(o)}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>

                        <div className="tout gifting">
                            {content['gifting-tout-header']}
                            {content['gifting-tout-text']}
                        </div>

                        <div className="col-2">
                            <div className="tout msnbc">
                                {content['msnbc-tout-text']}
                            </div>
                            
                            <div className="tout newsletter">
                                Signup...
                            </div>
                        </div>
                    </div>

                }

                <Link to="/product/123">Product Link Test</Link>
            </div>
        );
    }

}
