import { NgModule, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule], 
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule],
})

export class MaterialModule {
 
 }