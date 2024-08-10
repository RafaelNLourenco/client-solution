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
  statuses = ['Ativo', 'Inativo', 'Pendente'];

  taxIDRegEx = '([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})';

  constructor(private fb: FormBuilder) {
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
      console.log(this.form.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
