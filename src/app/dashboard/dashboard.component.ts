import { Component} from '@angular/core';
import { ThemeConstants } from '../shared/config/theme-constant';

@Component({
    templateUrl: 'dashboard.html'
})

export class DashboardComponent {
  
    constructor(private colorConfig:ThemeConstants) {  
    }
    themeColors = this.colorConfig.get().colors;
}
