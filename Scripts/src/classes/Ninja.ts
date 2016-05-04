/// <reference path="../../typings/inversify/inversify.d.ts" />
import { injectable, inject } from "inversify";
import * as React from "react";
import * as ReactDom from "react-dom";
//import Page from "../Page";

@injectable()
export class Ninja implements INinja {

    private katana: IKatana;
    private shuriken: IShuriken;
    private _boo: string;

    public constructor(
        @inject("IKatana") katana: IKatana,
        @inject("IShuriken") shuriken: IShuriken
    ) {
        this.katana = katana;
        this.shuriken = shuriken;
        this._boo = "1";
    }

    public fight(): void {
        //ReactDom.render(
        //    React.createElement(Page, null),
        //    document.getElementById("content")
        //);

        //return this.katana.hit();
    };
    public sneak() { return this.shuriken.throw(); };

    public set boo(boo: string) {
        this._boo = boo;
    }

    public get boo(): string {
        return this._boo;
    }

}