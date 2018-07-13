import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from "./date-format.pipe"
//pipe will import here

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [CommonModule],
    declarations: [DateFormatPipe],
    providers: [DateFormatPipe],
    exports: [DateFormatPipe]
})

export class PipesModule { }
