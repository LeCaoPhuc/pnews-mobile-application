import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import {
    HomeModule,
    NewsDetailModule
} from "./pages"
import {
    SharedModule,
    LeftMenuModule
} from "./shared";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { registerElement } from "nativescript-angular/element-registry";
import { NativeScriptUIPhotoZoomModule } from "nativescript-photo-zoom/angular";
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        SharedModule,
        HomeModule,
        NewsDetailModule,
        LeftMenuModule,
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
