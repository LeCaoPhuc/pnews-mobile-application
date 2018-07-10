import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { Http, HttpModule, Response } from "@angular/http";
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from "ng2-translate";
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { ShareDataService, ParseService } from '~/shared/services';
import { map } from "rxjs-compat/operator/map";
import "rxjs-compat/add/observable/of";
import "rxjs-compat/add/operator/share";
import "rxjs-compat/add/operator/map";
import "rxjs-compat/add/operator/merge";
import "rxjs-compat/add/operator/toArray";
import "rxjs-compat/add/operator/take";
import 'rxjs-compat/operator/map';
import 'rxjs-compat/operators/map';
export function createTranslateLoader(http: Http) {
    return new CustomTranslateStaticLoader(http, '/assets/i18n/', '.json');
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

export class CustomTranslateStaticLoader extends TranslateLoader { // custom class to load json from local to fix error when uglify function http.get
    public http: Http;
    public prefix: String;
    public suffix: String;
    constructor(http: Http, prefix, suffix) {
        super();
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
    }
    getTranslation(lang: string) {

        return this.http.get(this.prefix + "/" + lang + this.suffix)
            .pipe()
            .map(function (res) {
                return res.json();
            })
    }
}