import { Component, OnInit } from "@angular/core";
import { TranslateService } from "ng2-translate";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(
        public translate : TranslateService
    ) {
        translate.setDefaultLang('en');
 
        // the lang to use, if the lang isn't available, it will use the current loader to get them
       translate.use('en');
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        console.log("translate ", (this.translate.get("AKA_NO_ARCHER.ARCHER") as any).value);
        // Init your component properties here.
    }
}
