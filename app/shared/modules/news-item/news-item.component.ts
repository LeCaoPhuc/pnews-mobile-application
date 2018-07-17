import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import * as moment from 'moment';
import { TranslateService } from "ng2-translate";
import {
    ShareDataService,
    ParseService,
    NewsModel
} from "~/shared";
import * as platform from "platform";
@Component({
    selector: "news-item",
    moduleId: module.id,
    templateUrl: "./news-item.html",
    styleUrls: ["./news-item.css"],
})
export class NewsItemComponent implements OnInit {
    @Input("newsItem") newsItem: NewsModel;
    @Output("titleTap") onTitleTap: EventEmitter<any>;
    public screenHeight: number;
    public screenWidth: number;
    constructor(
        public translateService: TranslateService,
        public shareDataService: ShareDataService,
        public parseService: ParseService,
    ) {
        this.screenWidth = platform.screen.mainScreen.widthDIPs;
        this.screenHeight = platform.screen.mainScreen.heightDIPs;
        this.onTitleTap = new EventEmitter();
    }

    ngOnInit(): void {

        console.log("ngOnInit");
    }
    onTapTitle(args) {
        console.log("onTapTitle item");
        this.onTitleTap.next(this.newsItem);
    }
}