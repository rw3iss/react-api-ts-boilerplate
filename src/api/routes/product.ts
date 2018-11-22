import * as express from 'express';
import ApiResponse from '../helpers/ApiResponse';
import Shopify from '../helpers/Shopify';

const router = express.Router();

async function getProductData(req: Express.Request, res: Express.Response): Promise<any> {
    const response = new ApiResponse(res, res);

    try {
        const productId = (req as any).params.productId;

        // ask shopify for product data
        let r = await Shopify.getProductData(productId) as any;
        console.log("Got shopify data:\n", r);
        return Promise.resolve(response.success({ 
            productId: productId, 
            data: r
        }));
    }
    catch (err) {
        console.log("getProductData error", err);
        //ErrorUtil.logAndSendErrResponse(response, AppErrors.API_ERROR, err, err.httpCode || 500, 'namespace');
    }
}

router.get('/api/product/:productId', getProductData);

export const product = router;
