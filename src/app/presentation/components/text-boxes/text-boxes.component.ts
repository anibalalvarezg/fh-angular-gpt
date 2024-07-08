import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-text-boxes',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './text-boxes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextBoxesComponent { }
