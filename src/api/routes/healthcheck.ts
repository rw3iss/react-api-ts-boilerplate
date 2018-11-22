import * as express from 'express';

const router = express.Router();

async function doHealthcheck(req: Express.Request, res: Express.Response): Promise<any> {
   
    try {
        (res as any).send('healthy');
        return Promise.resolve(res);
    } catch (err) {
        console.log(`healthcheck exception ${err}`);
        (res as any).status(500);
        (res as any).send('unhealthy');
        return Promise.resolve(res);
    }

}

router.get('/healthcheck', doHealthcheck);

export const healthcheck = router;
