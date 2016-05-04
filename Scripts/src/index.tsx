
import * as React from "react";
import * as ReactDom from "react-dom";
import kernel from "./inversify.config";
import App from "./App"

let ninja = kernel.get<INinja>("INinja");


ninja.fight();
ninja.boo = "2";

//let a = <App inversifyKernel={kernel}/>;
ReactDom.render(
    <App kernel={kernel}/>,
    document.getElementById("content")
);
