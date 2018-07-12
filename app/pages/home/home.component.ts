import { Component, OnInit, ViewChild, Injectable, ChangeDetectorRef } from "@angular/core";
import * as moment from 'moment';
import { TranslateService } from "ng2-translate";
import { ShareDataService, ParseService, SideDrawerService } from "~/shared";
import { Http } from "@angular/http";
import { Page, Color } from "tns-core-modules/ui/page/page";
import * as utils from "utils/utils";
import * as application from "application";
import * as frame from "ui/frame";
import { config } from "~/config";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

@Component({
    selector: "ns-home",
    moduleId: module.id,
    templateUrl: "./home.html",
    styleUrls: ["./home.css"],
})
export class HomeComponent implements OnInit {
    public frame = frame;
    private drawer: RadSideDrawer;
    public dataItems: ObservableArray<any>;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(
        public translateService: TranslateService,
        public shareDataService: ShareDataService,
        public parseService: ParseService,
        public sideDrawerService: SideDrawerService,
        public changeDetectorRef: ChangeDetectorRef,
        public http: Http,
        public page: Page
    ) {
        this.dataItems = new ObservableArray([{ name: "Atalanta" }, { name: "Achilles" }])
        for (var i = 0; i < 40; i++) {
            this.dataItems.push({
                name: "atalanta" + i
            })
        }

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

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
        var self = this;

        // var interval = setInterval(function () {
        //     if (self.drawer) {
        //         clearInterval(interval);
        //     }
        //     else {
        //         self.drawer = <RadSideDrawer>app.getRootView();
        //         self.changeDetectorRef.detectChanges();
        //     }
        // }, 10)

    }
    onTap(args) {
        console.log("onTap");
        this.parseService.cloud("hello", {})
            .then(function (res) {
                console.log("res");
            })
            .catch(function (error) {
                console.log("error");
            })
    }
    public openDrawer(args) {
        console.log("openDreaw");
        this.sideDrawerService.openDrawer();
    }
    public closeDrawer(args) {
        this.sideDrawerService.closeDrawer();
    }
    refreshList(args) {
        console.log("args");
        args.object.refreshing = false;
    }
}