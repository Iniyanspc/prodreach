import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { company } from '../data/catalog';
import { Logo } from './logo';

/** Modelled on the catalogue back cover: navy-black field, logo, contact block. */
@Component({
  selector: 'pr-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Logo],
  template: `
    <footer class="foot">
      <div class="wrap grid">
        <div class="brand">
          <pr-logo [onDark]="true" [size]="40" />
          <p class="tag">{{ c.tagline }}</p>
          <p class="blurb">Sourcing partner and brand house for corporate uniforms, StrideOn school &amp; corporate footwear, and accessories.</p>
        </div>

        <nav aria-label="Products">
          <h3 class="eyebrow">Products</h3>
          <a routerLink="/apparel">Corporate Apparel</a>
          <a routerLink="/strideon">StrideOn Footwear</a>
          <a routerLink="/accessories">Bags, Socks &amp; Caps</a>
          <a routerLink="/customization">Uniform Customization</a>
        </nav>

        <nav aria-label="Company">
          <h3 class="eyebrow">Company</h3>
          <a routerLink="/about">About Us</a>
          <a routerLink="/" fragment="process">Our Process</a>
          <a routerLink="/contact">Request a Quote</a>
        </nav>

        <div class="contact">
          <h3 class="eyebrow">Contact</h3>
          <a [href]="'https://' + c.website" target="_blank" rel="noopener">{{ c.website }}</a>
          <a [href]="'mailto:' + c.email">{{ c.email }}</a>
          <a [href]="'tel:' + c.phoneIntl">{{ c.phone }}</a>
        </div>
      </div>

      <div class="wrap legal">
        <span>© {{ year }} ProdReach. All rights reserved.</span>
        <span class="eyebrow">Corporate Apparel Catalogue · <span class="accent">2026 Edition</span></span>
      </div>
    </footer>
  `,
  styles: `
    .foot { background: var(--ink); color: var(--on-dark-soft); padding: clamp(56px, 8vw, 96px) 0 28px; }
    .grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1.2fr; gap: 40px; }
    .tag { margin: 18px 0 10px; font-family: var(--font-head); font-weight: 700; color: #fff; letter-spacing: 0.02em; }
    .blurb { max-width: 34ch; font-size: 0.92rem; }
    h3 { color: #fff; margin-bottom: 18px; font-size: 0.7rem; }
    nav, .contact { display: flex; flex-direction: column; gap: 10px; }
    a { color: var(--on-dark-soft); text-decoration: none; font-size: 0.94rem; transition: color .2s; }
    a:hover { color: var(--sky); }
    .contact a { font-family: var(--font-head); font-weight: 600; color: #fff; letter-spacing: 0.04em; font-size: 0.88rem; }
    .legal { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-top: 56px; padding-top: 24px; border-top: 1px solid var(--rule-dark); font-size: 0.82rem; }
    .legal .eyebrow { font-size: 0.64rem; color: #fff; }
    @media (max-width: 860px) { .grid { grid-template-columns: 1fr 1fr; } .brand { grid-column: 1 / -1; } }
    @media (max-width: 480px) { .grid { grid-template-columns: 1fr; } }
  `,
})
export class Footer {
  protected readonly c = company;
  protected readonly year = new Date().getFullYear();
}
