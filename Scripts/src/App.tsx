/// <reference path="../typings/inversify/inversify.d.ts" />
import * as inversify from "inversify";
import * as React from "react";
import Page from "./Page";

export interface IProps { kernel: inversify.IKernel; }

interface IState { }

export default class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    static childContextTypes: any = {
        kernel: React.PropTypes.object,
        color: React.PropTypes.string
    };

    public getChildContext(): any {
        return { 
            kernel: this.props.kernel,
            color: "red" 
        };
    }
    //childContextTypes: {
    //    kernel: IKernel;
    //}

    public render(): JSX.Element {
        return (
            <Page/>
        );
    }
}