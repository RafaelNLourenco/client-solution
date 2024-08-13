import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxMaskDirective } from 'ngx-mask';
import { cpfCnpjValidator } from '../../functions/validator_cpf_cnpj.function';
import { Client } from '../../model/client.model';
import { ClientService } from '../../services/client/client.service';

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

  constructor(private fb: FormBuilder,
              private clientService: ClientService,
              private _snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      companyName: ['', [Validators.required, Validators.minLength(5)]],
      tradeName: ['', [Validators.required, Validators.minLength(5) ]],
      taxID: ['', [Validators.required, cpfCnpjValidator()]],
      phone: ['', [Validators.required, Validators.pattern(this.phoneRegex)]],
      status: ['', Validators.required]
    });
  }

  // Aux functions
  showSnackBar(message: string){
    this._snackBar.open(message, '', {
      duration: 3000
    });
  }

  formReset(){
    this.form.reset();
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key)?.setErrors(null);
    });
  }

  // Events functions
  onSubmit() {
    if (this.form.valid) {
      const aux = this.form.value;
      var client: Client = new Client(aux.companyName,aux.tradeName, aux.taxID, aux.phone, aux.status)
      this.clientService.createClient(client).subscribe({
        next: _ => {
          this.formReset();
          this.showSnackBar("Cliente adicionado!");
        },
        error: _ => {
          this.showSnackBar("Ocorreu um erro");
        }
      });
    } else {
      this.showSnackBar('Formulário inválido');
    }
  }

  trimInput(controlName: string): void {
    const control = this.form.get(controlName);
    if (control) {
      control.setValue(control.value.trim(), { emitEvent: false });
    }
  }
}
