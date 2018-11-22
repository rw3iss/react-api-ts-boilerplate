import * as React from 'react';
//import DocumentMeta from 'react-document-meta';
import ContentService from '../../services/ContentService';

import './style';

let mounted = true;
export default class ProductPage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        const self = this;
        this.state = {
            content: undefined,
            product: undefined
        };
    }

    async componentDidMount() {
        // fetch data
        let productId = '123';
        let r = await ContentService.getPageContent('productpage') as any;
        let d = await ContentService.getProductData(productId) as any;
        console.log("got product data", r, d);

        this.setState({
            content: r,
            product: {
                data: d,
                meta: {
                    title: 'Dynamic Product Title: ' + d.data.name,
                    description: d.data.description,
                    canonical: 'http://example.com/path/to/page',
                    meta: {
                        charset: 'utf-8',
                        name: {
                            keywords: 'react,meta,document,html,tags'
                        }
                    }
                }
            }
        });
    }

    render() {
        const self = this;

        return (
            <div className="product-view">
                Product Page    

                {this.state.content && 
                    <div className="content">

                        { this.state.product && 
                            <div>
                                {this.state.product.data.data.name}
                                { /* <DocumentMeta {...this.state.product.meta} /> */ }
                            </div>
                        }
                        
                    </div>
                }
            </div>
        );
    }

}
