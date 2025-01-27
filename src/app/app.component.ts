import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrimeNgModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'skyLoft';
}
