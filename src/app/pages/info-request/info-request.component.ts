import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-info-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="form-container">
      <div class="form-wrapper">
        <div class="form-header">
          <h2>Solicitar Información</h2>
          <p>¿Te interesa saber más sobre la conservación de especies en riesgo? Déjanos tus datos.</p>
        </div>
        
        <form [formGroup]="requestForm" (ngSubmit)="onSubmit()">
          
          <div class="form-group row">
            <div class="col">
              <label for="name">Nombre(s)</label>
              <input type="text" id="name" formControlName="name" placeholder="Ej. Juan Andrés" />
              <div class="error" *ngIf="requestForm.get('name')?.invalid && requestForm.get('name')?.touched">
                El nombre es obligatorio (mínimo 2 letras).
              </div>
            </div>
            <div class="col">
              <label for="lastName">Apellidos</label>
              <input type="text" id="lastName" formControlName="lastName" placeholder="Ej. Pérez Gómez" />
              <div class="error" *ngIf="requestForm.get('lastName')?.invalid && requestForm.get('lastName')?.touched">
                Los apellidos son obligatorios.
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="rut">RUT</label>
            <input type="text" id="rut" formControlName="rut" placeholder="Ej. 12345678-9" />
            <div class="error" *ngIf="requestForm.get('rut')?.invalid && requestForm.get('rut')?.touched">
              Debe ingresar un RUT válido (con guion).
            </div>
          </div>

          <div class="form-group">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" formControlName="email" placeholder="ejemplo@correo.cl" />
            <div class="error" *ngIf="requestForm.get('email')?.invalid && requestForm.get('email')?.touched">
              Ingrese un correo electrónico válido.
            </div>
          </div>

          <div class="form-group">
            <label for="phone">Número Telefónico</label>
            <input type="tel" id="phone" formControlName="phone" placeholder="Ej. +56912345678" />
            <div class="error" *ngIf="requestForm.get('phone')?.invalid && requestForm.get('phone')?.touched">
              Ingrese un teléfono válido (ej. 9 dígitos).
            </div>
          </div>

          <button type="submit" [disabled]="requestForm.invalid" class="btn-submit">
            Enviar Solicitud
          </button>

          <div class="success-msg" *ngIf="submitted">
            ¡Gracias! Tu solicitud ha sido enviada con éxito.
          </div>
        </form>
      </div>
    </div>
  `,
  styles: `
    .form-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem 0;
    }
    .form-wrapper {
      background: var(--surface-color);
      width: 100%;
      max-width: 600px;
      border-radius: 16px;
      padding: 3rem;
      box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    }
    .form-header {
      text-align: center;
      margin-bottom: 2.5rem;
    }
    .form-header h2 {
      font-size: 2rem;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }
    .form-header p {
      color: var(--text-secondary);
    }
    
    .form-group {
      margin-bottom: 1.5rem;
      display: flex;
      flex-direction: column;
    }
    .row {
      flex-direction: row;
      gap: 1.5rem;
    }
    .col {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    
    label {
      font-weight: 600;
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
      color: var(--text-color);
    }
    input {
      padding: 0.8rem 1rem;
      border: 1px solid var(--border-color);
      border-radius: 8px;
      font-size: 1rem;
      background: var(--bg-color);
      color: var(--text-color);
      transition: border-color 0.3s;
    }
    input:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.2);
    }
    
    .error {
      color: #e53935;
      font-size: 0.85rem;
      margin-top: 0.4rem;
    }
    
    .btn-submit {
      width: 100%;
      padding: 1rem;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
      margin-top: 1rem;
    }
    .btn-submit:hover:not(:disabled) {
      background: #1e6d44;
    }
    .btn-submit:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    
    .success-msg {
      margin-top: 1.5rem;
      padding: 1rem;
      background: #e8f5e9;
      color: #2e7d32;
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
      border: 1px solid #c8e6c9;
    }
    
    @media (max-width: 600px) {
      .row {
        flex-direction: column;
        gap: 0;
      }
      .form-wrapper {
        padding: 2rem;
      }
    }
  `
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
