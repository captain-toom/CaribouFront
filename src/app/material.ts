import { NgModule, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatBadgeModule], 
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatBadgeModule],
})

export class MaterialModule {
 
 }