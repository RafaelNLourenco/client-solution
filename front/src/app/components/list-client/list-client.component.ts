import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-list-client',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.scss'
})
export class ListClientComponent {

}
