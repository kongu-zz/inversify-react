/// <reference path="../../typings/inversify/inversify.d.ts" />
import { injectable, inject } from "inversify";

@injectable()
export class Service implements IService {

    private ninja: INinja;

    public constructor(@inject("INinja") ninja: INinja) {
        this.ninja = ninja;
    }

    public test(): string {
        return this.ninja.boo;
    }
}