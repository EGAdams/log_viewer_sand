/*
 *  class LogObjectParser
 */
import type LogObject from "./ILogObject";   

export default class LogObjectParser {
    constructor() { console.log( "constructing LogObjectParser" ); }

    public createLogObjectFromString( logObjectString: any ): LogObject {
        console.log( "parsing string: " + logObjectString );
        let newObject = JSON.parse( logObjectString );
        let logObject: LogObject = {
            id:        "", 
            timestamp: 0,
            message:   "",
            method:    "" };
        console.log( "name: " + newObject.construction_name );
        return logObject; }
}
