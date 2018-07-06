import { Component } from "@angular/core";
import { TranslateService } from "ng2-translate";
import { ShareDataService, ParseService } from "~/shared";
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor(
        public translate: TranslateService,
        public shareDataService: ShareDataService,
        public parseService: ParseService,
    ) {
        // setTimeout(function () {
        translate.setDefaultLang('en');
        translate.use('en');
        // }, 500)

        parseService.init();
        shareDataService.setData("akaNoArcher", "Atalanta Alter");
    }
}
