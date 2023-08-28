import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomaComponent } from './soma';

@NgModule({
  declarations: [SomaComponent],
  imports: [CommonModule],
  exports: [SomaComponent],
})
export class SomaModule {}
