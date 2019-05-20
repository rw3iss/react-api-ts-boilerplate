export class PathUtils {
    public static convertToUnixDockerPath(p:string):string {
        if(/[a-zA-Z]:\\.*/.test(p)) {
            return'//'+p[0].toLocaleLowerCase()+p.slice(2).replace(/\\/g,'/');
        } else { //its already a unix path
            return p;
        }
    }
}