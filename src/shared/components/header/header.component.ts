import { Component } from '@angular/core';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
