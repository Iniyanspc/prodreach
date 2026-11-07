import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Logo } from './logo';

@Component({
  selector: 'pr-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, Logo],
  template: `
    <header class="bar">
      <div class="wrap inner">
        <a routerLink="/" class="brand" aria-label="ProdReach home" (click)="open.set(false)">
          <pr-logo [onDark]="true" [size]="26" />
        </a>

        <button class="toggle" type="button" [attr.aria-expanded]="open()" aria-controls="site-nav"
                (click)="open.set(!open())">
          <span class="sr-only">Menu</span><span class="burger" [class.x]="open()"></span>
        </button>

        <nav id="site-nav" class="nav" [class.open]="open()" aria-label="Main">
          @for (l of links; track l.path) {
            <a [routerLink]="l.path" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: l.path === '/' }"
               (click)="open.set(false)">{{ l.label }}</a>
          }
          <a routerLink="/contact" class="btn quote" (click)="open.set(false)">Get a Quote</a>
        </nav>
      </div>
    </header>
  `,
  styles: `
    .bar { position: sticky; top: 0; z-index: 50; background: rgba(0, 13, 32, 0.94); backdrop-filter: blur(10px); border-bottom: 1px solid var(--rule-dark); }
    .inner { display: flex; align-items: center; justify-content: space-between; height: 72px; }
    .brand { text-decoration: none; display: inline-flex; }
    .nav { display: flex; align-items: center; gap: clamp(14px, 2vw, 30px); }
    .nav a:not(.btn) {
      color: var(--on-dark-soft); text-decoration: none; font-family: var(--font-head); font-weight: 600;
      font-size: 0.74rem; letter-spacing: 0.16em; text-transform: uppercase; padding: 6px 0; border-bottom: 2px solid transparent;
      transition: color .2s, border-color .2s;
    }
    .nav a:not(.btn):hover, .nav a.active { color: #fff; border-color: var(--blue); }
    .quote { padding: 0.7rem 1.1rem; font-size: 0.72rem; }
    .toggle { display: none; background: none; border: 0; padding: 10px; cursor: pointer; }
    .burger, .burger::before, .burger::after { display: block; width: 24px; height: 2px; background: #fff; transition: transform .25s, background .25s; }
    .burger { position: relative; }
    .burger::before, .burger::after { content: ''; position: absolute; left: 0; }
    .burger::before { top: -7px; } .burger::after { top: 7px; }
    .burger.x { background: transparent; }
    .burger.x::before { transform: translateY(7px) rotate(45deg); }
    .burger.x::after { transform: translateY(-7px) rotate(-45deg); }

    @media (max-width: 960px) {
      .toggle { display: block; }
      .nav {
        position: fixed; inset: 72px 0 auto 0; flex-direction: column; align-items: stretch; gap: 0;
        background: var(--ink); padding: 8px var(--gutter) 24px; border-bottom: 1px solid var(--rule-dark);
        transform: translateY(-8px); opacity: 0; visibility: hidden; transition: opacity .2s, transform .2s, visibility .2s;
      }
      .nav.open { opacity: 1; visibility: visible; transform: none; }
      .nav a:not(.btn) { padding: 16px 0; border-bottom: 1px solid var(--rule-dark); font-size: 0.85rem; }
      .nav a.active { border-bottom-color: var(--blue); }
      .quote { margin-top: 18px; justify-content: center; }
    }
  `,
})
export class Header {
  protected readonly open = signal(false);
  protected readonly links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/apparel', label: 'Apparel' },
    { path: '/strideon', label: 'StrideOn' },
    { path: '/accessories', label: 'Accessories' },
    { path: '/customization', label: 'Customization' },
  ];
}
