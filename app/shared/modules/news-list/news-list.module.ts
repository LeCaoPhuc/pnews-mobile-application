import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { NewsListComponent } from "./news-list.component";
import { NewsItemModule } from "~/shared/modules";
import { SharedModule } from "~/shared/shared.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        SharedModule,
        NewsItemModule
    ],
    declarations: [
        NewsListComponent
    ],
    bootstrap: [NewsListComponent],
    exports: [NewsListComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewsListModule { }
