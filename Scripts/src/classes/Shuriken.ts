/// <reference path="../../typings/inversify/inversify.d.ts" />
import { injectable, inject } from "inversify";

@injectable()
export class Shuriken implements IShuriken {
    public throw(): string {
        return "hit!";
    }
}