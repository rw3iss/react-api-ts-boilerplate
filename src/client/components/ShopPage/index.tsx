import * as React from 'react';
//import DocumentMeta from 'react-document-meta';
import './style';

const meta = {
    title: 'Shop Page Meta Title',
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
export default class LeaShopPagernPage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        const self = this;
        this.state = {
        };
    }

    render() {
        const self = this;

        return (
            <div className="shop-view">
                Shop Page

            </div>
        );
    }

}
