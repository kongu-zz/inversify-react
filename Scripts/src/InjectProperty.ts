/// <reference path="../typings/inversify/inversify.d.ts" />
import { injectable, inject, IKernel } from "inversify";

interface IContext {

    kernel: IKernel;
    color: string;
}

export function InjectProperty(binding: string): (target: any, key: string) => void {
    return function (target: any, key: string) {

        // property value
        var _val = target[key];

        // property getter
        var getter = function () {
            let tt = target;
            let kk = key;

            if (this && this.context && this.context.kernel) {
                if (!tt[kk]) {
                    tt[kk] = (this.context as IContext).kernel.get<any>(binding);
                }
                _val = tt[kk];
            }

            console.log(`Get: ${kk} => ${_val}`);
            return _val;
        };

        // property setter
        var setter = function (newVal: any) {
            console.log(`Set: ${key} => ${newVal}`);
            _val = newVal;
        };

        // Delete property.
        if (delete target[key]) {

            // Create new property with getter and setter
            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
}