import { Kernel, IKernel } from "inversify";
import {KernelStore} from "./KernelStore";

import { Ninja } from "./classes/Ninja";
import { Katana } from "./classes/katana";
import { Shuriken} from "./classes/shuriken";
import {Service} from "./classes/Service";

//import Page from "./Page";

let kernel = new Kernel();

//let kernel = KernelStore.get();
kernel.bind<INinja>("INinja").to(Ninja).inSingletonScope();
kernel.bind<IKatana>("IKatana").to(Katana);
kernel.bind<IShuriken>("IShuriken").to(Shuriken);
kernel.bind<IService>("IService").to(Service);
//kernel.bind<Page>(Page).to(Page).inSingletonScope();

export default kernel;