import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="app-header">
      <div class="logo">
        <a routerLink="/"><span class="icon">🍃</span> Chile Natural</a>
      </div>
      <nav class="nav-links">
        <a routerLink="/inicio" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a>
        <a routerLink="/species" routerLinkActive="active">Especies</a>
        <a routerLink="/catalog" routerLinkActive="active">Catálogo</a>
        <a routerLink="/request" routerLinkActive="active">Contacto</a>
      </nav>
    </header>
  `,
  styles: `
    .app-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 3rem;
      background-color: var(--surface-color);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid var(--border-color);
    }
    .logo a {
      font-size: 1.8rem;
      font-weight: 800;
      text-decoration: none;
      color: var(--primary-color);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      letter-spacing: -0.5px;
    }
    .nav-links {
      display: flex;
      gap: 2rem;
    }
    .nav-links a {
      text-decoration: none;
      color: var(--text-color);
      font-weight: 600;
      font-size: 1.1rem;
      transition: color 0.3s ease, border-bottom 0.3s ease;
      padding-bottom: 0.3rem;
      border-bottom: 2px solid transparent;
    }
    .nav-links a:hover, .nav-links a.active {
      color: var(--primary-color);
      border-bottom: 2px solid var(--primary-color);
    }
    @media (max-width: 768px) {
      .app-header {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      }
    }
  `
})
export class HeaderComponent {}
