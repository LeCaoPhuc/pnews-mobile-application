import { Component, OnInit, ViewChild, Injectable, ChangeDetectorRef, ElementRef } from "@angular/core";
import * as moment from 'moment';
import { TranslateService } from "ng2-translate";
import { RouterExtensions } from "nativescript-angular/router";
import { ShareDataService, ParseService, SideDrawerService, NewsListService, NewsModel, } from "~/shared";
import { WebView, LoadEventData } from "ui/web-view";
import { Label } from "ui/label";
import { Color } from "tns-core-modules/ui/page/page";
import * as utils from "utils/utils";
import * as application from "application";
import * as frame from "ui/frame";
import { config } from "~/config";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

@Component({
    selector: "news-detail-screen",
    moduleId: module.id,
    templateUrl: "./news-detail-screen.html",
    styleUrls: ["./news-detail-screen.css"],
})
export class NewsDetailComponent implements OnInit {
    public drawer: RadSideDrawer;
    public newsItem: NewsModel;
    public isShowLoading = true;
    @ViewChild("webView") webView: ElementRef;
    constructor(
        public translateService: TranslateService,
        public shareDataService: ShareDataService,
        public parseService: ParseService,
        public sideDrawerService: SideDrawerService,
        public changeDetectorRef: ChangeDetectorRef,
        public newsListService: NewsListService,
        public routerExtensions: RouterExtensions,
    ) {
        this.newsItem = this.shareDataService.getData("currentNewsItems");

    }

    ngOnInit() {
        if (app.ios) {
            let controller = frame.topmost().ios.controller;
            let navigationItem = controller.visibleViewController.navigationItem;
            navigationItem.hidesBackButton = true;
            console.log("ngOnInit");
        }

    }

    ngAfterViewInit() {
        let webview: WebView = this.webView.nativeElement;
        var self = this;
        webview.on(WebView.loadStartedEvent, function (args: LoadEventData) {
            let message;
            if (!args.error) {
                message = "WebView finished loading of " + args.url;
            } else {
                message = "Error loading " + args.url + ": " + args.error;
            }
            var arrSplitUrl = self.newsItem.sourceUrl.split("://");
            var urlMobile = "";
            if (arrSplitUrl && arrSplitUrl.length >= 2) {
                for (var i = 0; i < arrSplitUrl.length; i++) {
                    if (i == 0) {
                        urlMobile += arrSplitUrl[i] + "://" + "m.";
                    }
                    else {
                        urlMobile += arrSplitUrl[i];
                    }
                }
            }
            console.log("url-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ", args.url);
            if (app.ios) {
                if (args.url != "about:blank" && args.url != self.newsItem.sourceUrl && args.url != urlMobile) { // check if page load hide loading, page can active with lazy load web
                    console.log("isShowLoading-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ");
                    self.isShowLoading = false;
                    self.changeDetectorRef.detectChanges();
                }
            }
            else {
                if (args.url != self.newsItem.sourceUrl) {
                    self.isShowLoading = false;
                    self.changeDetectorRef.detectChanges();
                }
            }
            console.log("WebView message - " + message);
        });
    }

    goBack(args) {
        this.routerExtensions.backToPreviousPage();
    }
}