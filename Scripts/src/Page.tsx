/// <reference path="../typings/inversify/inversify.d.ts" />
import { injectable, inject, IKernel } from "inversify";
import * as React from "react";
import InjectReact from "./InjectReact"
import {InjectProperty} from "./InjectProperty"

export interface IProps { }

interface IState { }

interface IContext {
    
    kernel: IKernel;
    color: string;
}

//@injectable()
@InjectReact.do(null, null)
export default class Page extends React.Component<IProps, IState> {

    @InjectProperty("IService")
    private service: IService;
    @InjectProperty("INinja")
    private ninja: INinja;

    constructor(props: IProps, context: IContext) {
        super(props, context);

        let a = this.service;
    }

    public render(): JSX.Element {

        return (
            <div className="b-logo">
                {this.service.test() + ", " + (this.context as any).color + ", " + this.ninja.boo}
            </div>
        );
    }
}