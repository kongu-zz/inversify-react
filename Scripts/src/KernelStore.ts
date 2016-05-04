import { Kernel, IKernel } from "inversify";

export class KernelStore {
    public static kernel: IKernel;

    public static get(): IKernel {
        if (!KernelStore.kernel) {
            KernelStore.create();
        }
        return KernelStore.kernel;
    }

    public static create(): void {
        KernelStore.kernel = new Kernel();
    }
}