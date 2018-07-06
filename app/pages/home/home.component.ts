import { Component, OnInit } from "@angular/core";
import * as moment from 'moment';
import { TranslateService } from "ng2-translate";
import { ShareDataService, ParseService } from "~/shared"
@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.html",
})
export class HomeComponent implements OnInit {
    name: string = "Test";
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(
        public translateService: TranslateService,
        // public shareDataService: ShareDataService,
        // public parseService: ParseService,
    ) { }

    ngOnInit(): void {
        var time = moment(new Date()).format("hh:mm");
        // var dataShare = this.shareDataService.getData("akaNoArcher");
        // console.log("shareData", dataShare);
        console.log("translate service", (this.translateService.get("AKA_NO_ARCHER.ARCHER") as any).value);
        // console.log("init", this.name);
    }
    onTap(args) {
        // this.parseService.cloud("hello", {})
        //     .then(function (res) {
        //         console.log("res");
        //     })
        //     .catch(function (error) {
        //         console.log("error");
        //     })
    }
}