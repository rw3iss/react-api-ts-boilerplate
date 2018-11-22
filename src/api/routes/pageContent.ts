import * as express from 'express';
import ApiResponse from '../helpers/ApiResponse';
import Strapi from '../helpers/Strapi';

const router = express.Router();

async function getPageContent(req: Express.Request, res: Express.Response): Promise<any> {
    const response = new ApiResponse(res, res);

    try {
        const pageId = (req as any).params.pageId;
        console.log("getPageContent", pageId);

        // ask strapi for page content
        let r = await Strapi.getPageContent(pageId) as any;

        return Promise.resolve(response.success({ 
            pageId: pageId, 
            content: r 
        }));
    }
    catch (err) {
        console.log("getPageContent error", err);
        //ErrorUtil.logAndSendErrResponse(response, AppErrors.API_ERROR, err, err.httpCode || 500, 'namespace');
    }
}

router.get('/api/page/:pageId', getPageContent);

export const pageContent = router;
