import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CutStringPipe } from '../pipes/cut-string.pipe';

@NgModule({
  declarations: [
    CutStringPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    CutStringPipe
  ]
  
})
export class SharedModule { }
