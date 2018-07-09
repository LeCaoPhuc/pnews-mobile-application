import { Component, OnInit } from "@angular/core";
import * as moment from 'moment';
import { TranslateService } from "ng2-translate";
import { ShareDataService, ParseService } from "~/shared";
@Component({
    selector: "news-item",
    moduleId: module.id,
    templateUrl: "./news-item.html",
})
export class NewsItemComponent implements OnInit {
    constructor(
        public translateService: TranslateService,
        public shareDataService: ShareDataService,
        public parseService: ParseService,
    ) { }

    ngOnInit(): void {
        console.log("ngOnInit");
    }
}