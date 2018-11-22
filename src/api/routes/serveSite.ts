import * as express from 'express';
import * as path from 'path';

const router = express.Router();

// Redirects all remaining routes to the index.html file/main client app:
async function handleServeSite(req: Express.Request, res: Express.Response, next): Promise<any> {
    console.log("serve site");

    // AJAX requests should not expect index.html
    if ((req as any).xhr)
        return next();
    
    //const home = path.resolve('.');

    // Don't cache index.html
    //(res as any).header('Cache-Control', 'private, no-cache, no-store, must-revalidate, max-age=0');
    
    //(res as any).send("Static site not configured from API.");

    // serve client build file:
    //(res as any).send("Disabled for now.");
    (res as any).sendFile(path.resolve('./', 'build', 'index.html'));
}

router.get('*', handleServeSite);

export const serveSite = router;
