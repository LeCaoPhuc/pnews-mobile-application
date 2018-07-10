import { Component, OnInit } from "@angular/core";
import * as moment from 'moment';
import { TranslateService } from "ng2-translate";
import { ShareDataService, ParseService } from "~/shared";
import { Http } from "@angular/http";
import { Page, Color } from "tns-core-modules/ui/page/page";
import * as utils from "utils/utils";
import * as application from "application";
import frame = require("ui/frame");
import { config } from "~/config";
@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.html",
    styleUrls: ["./home.css"],
})
export class HomeComponent implements OnInit {
    public frame = frame;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(
        public translateService: TranslateService,
        public shareDataService: ShareDataService,
        public parseService: ParseService,
        public http: Http,
        public page: Page
    ) {

    }

    ngOnInit(): void {
        if (application.ios) {
            let applicationIos = application.ios.nativeApp;
            application.ios.nativeApp.valueForKey("statusBarWindow").valueForKey("statusBar").backgroundColor = new Color(config.application.STATUS_COLOR).ios;
        }
        else {
            application.android.startActivity.getWindow().setStatusBarColor(new Color(config.application.STATUS_COLOR).android);
        }

    }
    onTap(args) {
        console.log("onTap");
        console.log("translate service", (this.translateService.get("AKA_NO_ARCHER.ARCHER") as any).value);
        this.parseService.cloud("hello", {})
            .then(function (res) {
                console.log("res");
            })
            .catch(function (error) {
                console.log("error");
            })
    }
}