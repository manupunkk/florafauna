import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="app-footer">
      <p>&copy; 2026 Chile Natural: Flora y Fauna. Todos los derechos reservados.</p>
      <p class="subtitle">Conciencia y protección de nuestra biodiversidad.</p>
    </footer>
  `,
  styles: `
    .app-footer {
      background-color: var(--surface-color);
      color: var(--text-secondary);
      text-align: center;
      padding: 2rem;
      border-top: 1px solid var(--border-color);
      margin-top: auto;
    }
    .subtitle {
      font-size: 0.9rem;
      margin-top: 0.5rem;
      color: var(--primary-color);
    }
  `
})
export class FooterComponent {}
