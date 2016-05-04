import { Kernel, IKernel } from "inversify";
import {KernelStore} from "./KernelStore";

export const AutowiredAnnotationImpl: any = function (binding: string): (target: any, key: string) => void {
    // var getter = function () {
    //     console.log(`Get: ${key} => ${_val}`);
    //     return _val;
    // };
  
    return function (target: any, key: string): void {
        console.log(`Autowired binding '${binding}' to param '${key}'`);

        //const kernel: IKernel = KernelStore.get();
        //target[key] = kernel.get<any>(binding);
        target[key] = null;
    };
   
};