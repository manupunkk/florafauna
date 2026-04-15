import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './info-request.component.html',
  styleUrl: './info-request.component.css'
})
export class InfoRequestComponent {
  requestForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.requestForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', Validators.required],
      rut: ['', [Validators.required, Validators.pattern(/^[0-9]+-[0-9kK]{1}$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[+0-9]{8,15}$/)]]
    });
  }

  onSubmit() {
    if (this.requestForm.valid) {
      this.submitted = true;
      console.log('Formulario enviado:', this.requestForm.value);
      this.requestForm.reset();
      
      setTimeout(() => {
        this.submitted = false;
      }, 5000);
    } else {
      this.requestForm.markAllAsTouched();
    }
  }
}
