/// <reference path="../../typings/inversify/inversify.d.ts" />
import { injectable, inject } from "inversify";

@injectable()
export class Katana implements IKatana {
    public hit(): string {
        return "cut!";
    }
}