import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { Http, HttpModule, Response } from "@angular/http";
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { ShareDataService, ParseService } from '~/shared/services';
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        HttpModule,
        TNSFontIconModule.forRoot({
            'mdi': 'fonts/material-design-icons.css'
        }),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
    ],
    providers: [
        ShareDataService,
        ParseService
    ],
    exports: [
        NativeScriptModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        TNSFontIconModule,
        TranslateModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }