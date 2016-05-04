import * as React from "react";

export default class InjectReact {

    public static do(roles: string, users: string): any {
        return function(target: any) { // Actual decorator
            var role = roles;
            var original = target;

            // the new constructor behaviour
            var f : any = function (...args: Array<any>) {
                
                return InjectReact.construct(original, args);
            }

            f = InjectReact.copyProperties(f, original);
            
            // if(role !== "admin") {
            //     f.prototype.componentDidMountOld = f.prototype.componentDidMount;
            //     f.prototype.componentDidMount = InjectReact.newf;
            //     f.willTransitionTo = InjectReact.attachRedirection;
            // }

            // return new constructor (will override original)
            // f.contextTypes = {
            //     kernel: React.PropTypes.object
            // };
            
            /// inject kernel from parent context
            if(!f.contextTypes) {
                f.contextTypes = {};
            }
            
            Object.assign(
                f.contextTypes, 
                f.contextTypes, {
                   kernel: React.PropTypes.object 
            });
                
            return f;
        }        
    }

    private static newf(): void {
        //alert("ee");
        var that: any = this;
        that.props.history.pushState(that.props.location.pathname, '/login');

        that.componentDidMountOld();
    }

    private static attachRedirection(transition: any, params: any, query: any, callback: any): any {
        transition.redirect("/login", params, query);
        callback();        
    }

    // a utility function to generate instances of a class
    private static construct(constructor: any, args: any): any {
        var c : any = function () {
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();        
    }

    private static copyProperties(target:any, original: any) {
        // copy prototype so intanceof operator still works
        target.prototype = original.prototype;
        // copy all properties
        for ( let i in  original) {
            target[i] = original[i];
        }
        return target;        
    }
}
