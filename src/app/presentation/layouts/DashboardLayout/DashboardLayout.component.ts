import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './DashboardLayout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardLayoutComponent { }
