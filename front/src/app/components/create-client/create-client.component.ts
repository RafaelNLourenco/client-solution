import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client/client.service';
import { Client } from '../../vo/client.model';

@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [HeaderComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.scss'
})
export class CreateClientComponent {
  form: FormGroup;

  statuses = [
    {label: 'Ativado', value: 1},
    {label: 'Desativado', value: 0},
  ]

  taxIDRegEx = '([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})';

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.form = this.fb.group({
      companyName: ['', Validators.required],
      tradeName: ['', Validators.required],
      taxID: ['', [Validators.required, Validators.pattern(this.taxIDRegEx)]],
      contact: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const aux = this.form.value;
      var client: Client = new Client(aux.companyName,aux.tradeName, aux.taxID, aux.contact, aux.status)
      this.clientService.createClient(client).subscribe({
        next: response => {
          console.log("Boa");
        },
        error: error => {
          console.error('Erro ao criar cliente', error);
        }
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }

  ngOnInit(): void { }
}
