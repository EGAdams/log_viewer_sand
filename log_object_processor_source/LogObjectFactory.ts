/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */
/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/no-this-expression */
/* eslint-disable functional/no-class */
import { ILogObject } from "./ILogObject";
/**
 * @description
 * creates log objects giving them a unique id, time stamp, and determined calling method.
 *
 * @class LogObjectFactory
 */
export class LogObjectFactory {
    someObject: any;
    constructor( someObjectArg: any ) {
        console.log( 'constructing LogObjectFactory object...' );
        this.someObject = someObjectArg; }

    createLogObject( messageArg: string ): ILogObject {
        const time_now              = Date.now();
        const random_number         = Math.floor( Math.random() * 10000000000000 );
        const logObject: ILogObject = {
            timestamp: time_now,
            id:        this.someObject.constructor.name + "_" + random_number + '_' + time_now,
            message:   messageArg,
            method:    this.getCallingMethod() };
        return logObject; }

    getCallingMethod(): string {
        var obj:any = {};
        Error.captureStackTrace( obj, this.getCallingMethod );
        return obj.stack.split( '\n' )[ 2 ].match( /at\s+\w+.(\w+)/ )[ 1 ]; }
}
