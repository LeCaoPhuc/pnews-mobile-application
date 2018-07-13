import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NewsDetailComponent } from "./news-detail-screen.component";

const routes: Routes = [
    { path: "newsDetailScreen", component: NewsDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NewsDetailRoutingModule { }
