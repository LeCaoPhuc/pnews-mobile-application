import { Component } from "@angular/core";
import { TranslateService } from "ng2-translate";
import { ShareDataService, ParseService, SideDrawerService } from "~/shared";
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor(
        public translate: TranslateService,
        public shareDataService: ShareDataService,
        public parseService: ParseService,
        public sideDrawerService: SideDrawerService,
    ) {
        translate.setDefaultLang('en');
        translate.use("en");
        parseService.init();
        sideDrawerService.init();
        shareDataService.setData("akaNoArcher", "Atalanta Alter");

    }
}
