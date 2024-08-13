import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Client } from '../../model/client.model';
import { MatTableModule } from '@angular/material/table';
import { ClientService } from '../../services/client/client.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-client',
  standalone: true,
  imports: [HeaderComponent,
            MatTableModule,
            CommonModule
  ],
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.scss'
})
export class ListClientComponent {

  constructor(private clientService: ClientService) { }

  displayedColumns: string[] = ['companyName', 'tradeName', 'taxID', 'contact', 'status'];

  dataSource!: Client[];

  ngOnInit(): void {
    this.clientService.getClient().subscribe({
      next: response => {
        this.dataSource = response;
        console.log(this.dataSource);
      },
      error: error => {
        console.error('Erro ao obter dados', error);
      }
      }
    );
  }

}
