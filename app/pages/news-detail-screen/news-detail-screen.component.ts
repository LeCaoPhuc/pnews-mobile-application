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
import * as platform from "platform";

@Component({
    selector: "news-detail-screen",
    moduleId: module.id,
    templateUrl: "./news-detail-screen.html",
    styleUrls: ["./news-detail-screen.css"],
})
export class NewsDetailComponent implements OnInit {
    @ViewChild("listView") listView: ElementRef;
    public drawer: RadSideDrawer;
    public newsItem: NewsModel;
    public isShowLoading = true;
    public arrData = [
        {
            type: "title",
            content: "YouTube vừa tung ra công cụ Copyright Match để hạn chế reup video trái phép"
        },
        {
            type: "image",
            content: "https://images3.alphacoders.com/712/712915.jpg"
        },
        {
            type: "subtitle",
            content: "Khác với phần mềm Content ID được tung ra trước đó, Copyright Match sẽ được phổ biến cho nhiều người dùng hơn, cụ thể là những kênh YouTube có lượng người đăng ký hơn 100.000."
        },
        {
            type: "text",
            content: "YouTube vừa tung ra một công cụ cho phép chủ nhân của video kiểm tra xem thành phẩm của họ có bị đánh cắp. Giờ đây, mỗi khi một video được đăng tải lên YouTube, nền tảng này sẽ quét và đối chiếu xem liệu nội dung này đã tồn tại hoặc có nhiều điểm tương đồng với các video khác trên website này hay không. Nó chỉ nhận diện những video hoàn chỉnh chứ không phải từng đoạn clip ngắn."
        },
        {
            type: "image",
            content: "http://static.minitokyo.net/downloads/37/34/716737.jpg",
        },
        {
            type: "text",
            content: 'Công cụ này – được YouTube đặt tên là Copyright Match, sẽ được phát hành cho những kênh YouTube có hơn 100.000 người đăng ký vào tuần sau. Nó cũng sẽ "cập bến" cho nhiều người dùng khác trong những tháng tới. Sau khi kích hoạt, Copyright Match sẽ báo cáo cho chủ nhân video nếu một bản sao video của họ xuất hiện trên YouTube. Nếu có kết quả, họ sẽ có thể lựa chọn một trong những giải pháp: không làm gì cả, liên lạc với người sao chép nội dung của mình hoặc yêu cầu YouTube loại bỏ video này.'
        },
        {
            type: "text",
            content: 'Bạn phải là người đầu tiên đăng tải video này thì mới được Copyright Match công nhận là chủ nhân, vì vậy có một lỗ hổng là nếu ai đó đã tải "lậu" video của bạn trên Vimeo hay Facebook, đăng lên YouTube trước bạn thì công cụ này cũng sẽ không nhận ra.'
        },
        {
            type: "image",
            content: 'https://static.zerochan.net/Red.Archer.full.1619593.jpg'
        },
        {
            type: "text",
            content: "Trước đây, Youtube cũng có một phần mềm tương tự lấy tên Content ID. Nó sẽ giúp người nắm giữ bản quyền video tìm những kẻ sử dụng nội dung của họ mà không được sự cho phép. Rất ít người có được quyền truy cập công cụ này và khác với Copyright Match, Content ID cho phép chủ nhân kiếm tiền từ các video được tải lên trái phép."
        },
        {
            type: "end",
            content: "Theo TheVerge"
        }
    ];
    public dataItem: ObservableArray<any>;
    public screenHeight: number;
    public screenWidth: number;
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
        this.dataItem = new ObservableArray(this.arrData);
        this.screenWidth = platform.screen.mainScreen.widthDIPs;
        this.screenHeight = platform.screen.mainScreen.heightDIPs;
    }
    onTap(args) {
        this.listView.nativeElement.refresh();
    }
    ngOnInit() {
        if (app.ios) {
            let controller = frame.topmost().ios.controller;
            let navigationItem = controller.visibleViewController.navigationItem;
            navigationItem.hidesBackButton = true;
            console.log("ngOnInit");
        }

    }

    onScrollViewLoaded(args) {
        if (app.android) {
            args.object.android.setVerticalScrollBarEnabled(false);
        }
        else {
            args.object.ios.showsVerticalScrollIndicator = false;
        }
    }

    ngAfterViewInit() {
        // let webview: WebView = this.webView.nativeElement;
        // var self = this;
        // webview.on(WebView.loadStartedEvent, function (args: LoadEventData) {
        //     let message;
        //     if (!args.error) {
        //         message = "WebView finished loading of " + args.url;
        //     } else {
        //         message = "Error loading " + args.url + ": " + args.error;
        //     }
        //     var arrSplitUrl = self.newsItem.sourceUrl.split("://");
        //     var urlMobile = "";
        //     if (arrSplitUrl && arrSplitUrl.length >= 2) {
        //         for (var i = 0; i < arrSplitUrl.length; i++) {
        //             if (i == 0) {
        //                 urlMobile += arrSplitUrl[i] + "://" + "m.";
        //             }
        //             else {
        //                 urlMobile += arrSplitUrl[i];
        //             }
        //         }
        //     }
        //     console.log("url-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ", args.url);
        //     if (app.ios) {
        //         if (args.url != "about:blank" && args.url != self.newsItem.sourceUrl && args.url != urlMobile) { // check if page load hide loading, page can active with lazy load web
        //             console.log("isShowLoading-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ");
        //             self.isShowLoading = false;
        //             self.changeDetectorRef.detectChanges();
        //         }
        //     }
        //     else {
        //         if (args.url != self.newsItem.sourceUrl) {
        //             self.isShowLoading = false;
        //             self.changeDetectorRef.detectChanges();
        //         }
        //     }
        //     console.log("WebView message - " + message);
        // });
    }

    goBack(args) {
        this.routerExtensions.backToPreviousPage();
    }
    templateSelector(item: any, index: number, items: any): string {
        // if (item == "header") {
        return item.type;
        // }

    }
}