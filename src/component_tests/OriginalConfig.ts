/*
 * OriginalConfig 
 */
import { ISourceConfig } from "log-object-processor";

export class OriginalConfig implements ISourceConfig {
    public type     :string;
    public location :string;

    constructor () {
        this.type     = "url";
        this.location = "https://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php"; }
}
