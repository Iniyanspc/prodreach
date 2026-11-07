import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer';
import { Header } from './shared/header';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Header, Footer],
  template: `
    <a class="skip" href="#main">Skip to content</a>
    <pr-header />
    <main id="main"><router-outlet /></main>
    <pr-footer />
  `,
  styles: `
    .skip { position: absolute; left: -9999px; top: 0; z-index: 100; background: var(--blue); color: #fff; padding: 10px 16px; }
    .skip:focus { left: 16px; top: 16px; }
    main { display: block; min-height: 60vh; }
  `,
})
export class App {}
