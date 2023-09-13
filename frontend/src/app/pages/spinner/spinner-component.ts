import { Component, ViewEncapsulation } from '@angular/core';
import { LoadingService } from 'src/app/services/loadingService';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {
  constructor(public loader: LoadingService) { }
}