/// <reference path="../typings/inversify/inversify.d.ts" />
import { injectable, inject, IKernel } from "inversify";
import * as React from "react";
import InjectReact from "./InjectReact"
import {Logger} from "./Logger"
//import Requireable = __React.Requireable;

import {AutowiredAnnotationImpl} from "./AutowiredAnnotationImpl";
//import {KernelStore} from "./KernelStore";

export interface IProps { }

interface IState { }

interface IContext {
    
    kernel: IKernel;
    color: string;
}

//@injectable()
@InjectReact.do(null, null)
export default class Page extends React.Component<IProps, IState> {

    //@AutowiredAnnotationImpl("IService")
    @Logger("IService")
    private service: IService;// = (this.context as IContext).kernel.get<IService>("IService");
    @Logger("INinja")
    private ninja: INinja;

    constructor(props: IProps, context: IContext) {
        super(props, context);

        let a = this.service;
    }
    
    // static contextTypes: any = {
    //     color: React.PropTypes.string,
    //     kernel: React.PropTypes.object
    // };

//    static contextTypes: { kernel: React.Requireable<{kernel: IKernel;}>}  = {
    // static contextTypes: any = {
    //     kernel: React.PropTypes.object
    // };

    public render(): JSX.Element {
        //this.service = (this.context as IContext).kernel.get<IService>("IService");
        
        return (
            <div className="b-logo">
                {this.service.test() + ", " + (this.context as any).color + ", " + this.ninja.boo}
            </div>
        );
    }
}