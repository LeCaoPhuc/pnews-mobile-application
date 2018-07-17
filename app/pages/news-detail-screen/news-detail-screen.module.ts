import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { NewsDetailRoutingModule } from "./news-detail-screen.routing";
import { NewsDetailComponent } from "./news-detail-screen.component";
import { SharedModule } from "~/shared/shared.module";
import { NewsItemModule, NewsListModule } from "~/shared/modules";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NewsDetailRoutingModule,
        NativeScriptFormsModule,
        SharedModule,
        NewsItemModule,
        NewsListModule
    ],
    declarations: [
        NewsDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewsDetailModule { }
