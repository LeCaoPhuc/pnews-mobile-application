import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import * as moment from 'moment';
import * as app from 'application';
import { TranslateService } from "ng2-translate";
import {
    ShareDataService,
    ParseService,
    NewsModel
} from "~/shared";
import * as platform from "platform";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

declare var UITableViewCellSelectionStyle: any;

@Component({
    selector: "news-list",
    moduleId: module.id,
    templateUrl: "./news-list.html",
    styleUrls: ["./news-list.css"],
})
export class NewsListComponent implements OnInit {
    @ViewChild("listView") listView: ElementRef;
    @Input("newsList") newsList: ObservableArray<any>;
    @Input() isDataLoading: boolean;
    @Input() emptyDataText: boolean;
    @Output("onLoadMoreData") onLoadMoreData: EventEmitter<any>;
    @Output("onPullToRefresh") onPullToRefresh: EventEmitter<any>;
    @Output("onTitleTap") onTitleTap: EventEmitter<any>;
    constructor(
        public translateService: TranslateService,
        public shareDataService: ShareDataService,
        public parseService: ParseService,
    ) {
        this.onLoadMoreData = new EventEmitter();
        this.onPullToRefresh = new EventEmitter();
        this.onTitleTap = new EventEmitter();
    }

    ngOnInit() {
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-");
    }

    onItemLoadingIOS(args) {
        if (app.ios) {
            args.ios.selectionStyle = UITableViewCellSelectionStyle.None;
        }
    }

    onPullToRefreshInitiated(args) {
        this.onPullToRefresh.next(args);
    }

    onLoadMore(args) {
        this.onLoadMoreData.next(args);
    }

    onTapTitle(args) {
        console.log("onTapTitle");
        this.onTitleTap.next(args);
    }
}