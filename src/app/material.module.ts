import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
