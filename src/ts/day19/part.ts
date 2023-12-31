import { isThisTypeNode } from "typescript";

export class Part {
    private _x: number;
    private _m: number;
    private _a: number;
    private _s: number;

    constructor ( x: number, m: number, a: number, s: number) {
        this._x = x;
        this._m = m;
        this._a = a;
        this._s = s;
    }

    public get x(): number {
        return this._x;
    }
    public get m(): number {
        return this._m;
    }
    public get a(): number {
        return this._a;
    }
    public get s(): number {
        return this._s;
    }

    public getSum () : number {
        return this._x + this._m + this._a + this._s;
    }
}

export function createPartFromString (description: string): Part {
    let regex = /\{x=([0-9]+),m=([0-9]+),a=([0-9]+),s=([0-9]+)\}/;
    let groups = regex.exec( description );

    if ( groups == undefined ) {
        throw new Error ( description + " is not a part description!");
    }

    return new Part (Number(groups[1]),Number(groups[2]),Number(groups[3]),Number(groups[4]));
}