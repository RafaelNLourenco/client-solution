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
import { Client } from '../../model/client.model';
import { NgxMaskDirective } from 'ngx-mask';
import { cpfCnpjValidator } from '../../functions/validator_cpf_cnpj.function';

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
    CommonModule,
    NgxMaskDirective
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

  phoneRegex = /^[0-9]{10}$|^[0-9]{11}$/;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    this.form = this.fb.group({
      companyName: ['', Validators.required],
      tradeName: ['', Validators.required],
      taxID: ['', [Validators.required, cpfCnpjValidator()]],
      phone: ['', Validators.required, Validators.pattern(this.phoneRegex)],
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const aux = this.form.value;
      var client: Client = new Client(aux.companyName,aux.tradeName, aux.taxID, aux.contact, aux.status)
      this.clientService.createClient(client).subscribe({
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
function provideNgxMask(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

