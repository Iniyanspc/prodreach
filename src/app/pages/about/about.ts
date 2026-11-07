import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { about, company, pillars } from '../../data/catalog';
import { Icon } from '../../shared/icon';
import { Logo } from '../../shared/logo';
import { Process } from '../../shared/process';

@Component({
  selector: 'pr-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, Logo, Process],
  template: `
    <!-- Spread: photo page (p2) + text page (p3) -->
    <section class="spread">
      <div class="photo">
        <img src="images/brand/showroom.webp" width="1055" height="1491" alt="ProdReach showroom with uniform display tables" />
      </div>
      <article class="text-page">
        <div class="top">
          <span class="page-no">03</span>
          <pr-logo [size]="24" />
        </div>
        <p class="lead">{{ a.lead }}</p>
        @for (p of a.paragraphs; track $index) { <p>{{ p }}</p> }
        <p>{{ a.enterprise }}</p>
        <p>{{ a.ecosystem }}</p>
        <p class="promise">{{ a.promise }}</p>
        <p class="sign">ProdReach — {{ c.tagline }}</p>
        <h1 class="display title">About Us</h1>
      </article>
    </section>

    <!-- What we do -->
    <section class="pillars">
      <div class="wrap">
        <header class="head">
          <span class="eyebrow accent">A strategic bridge between brands and makers</span>
          <h2 class="display">What We Do</h2>
        </header>
        <div class="grid">
          @for (p of pillars; track p.title; let i = $index) {
            <div class="pillar">
              <span class="n">0{{ i + 1 }}</span>
              <pr-icon [name]="p.icon" [size]="36" class="ic" />
              <h3>{{ p.title }}</h3>
              <p>{{ p.text }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Promise band -->
    <section class="band">
      <div class="wrap band-inner">
        <p class="quote">Quality with <span class="sky">no compromise.</span><br />Service with <span class="sky">purpose.</span></p>
        <a routerLink="/contact" class="btn">Partner With Us</a>
      </div>
    </section>

    <pr-process />
  `,
  styles: `
    .spread { display: grid; grid-template-columns: 1fr 1fr; background: #fff; }
    .photo img { width: 100%; height: 100%; object-fit: cover; }
    .text-page {
      padding: clamp(32px, 5vw, 72px) clamp(24px, 6vw, 84px) clamp(40px, 5vw, 64px);
      display: flex; flex-direction: column; text-align: justify; hyphens: auto; color: var(--text-soft); font-size: 0.97rem;
    }
    .top { display: flex; justify-content: space-between; align-items: center; margin-bottom: clamp(28px, 4vw, 48px); color: var(--text); }
    .lead { font-family: var(--font-head); font-weight: 700; font-size: 1.12rem; color: var(--text); text-align: left; line-height: 1.5; }
    .promise { font-weight: 700; color: var(--text); }
    .sign { font-family: var(--font-head); font-weight: 600; font-size: 0.85rem; color: var(--text); }
    .title { margin-top: auto; padding-top: 32px; text-align: right; color: var(--text); }

    .pillars { background: var(--mist); padding: clamp(72px, 10vw, 120px) 0; }
    .head { margin-bottom: clamp(36px, 5vw, 56px); display: grid; gap: 10px; }
    .head .display { color: var(--text); }
    .grid { display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid #c9ced6; }
    .pillar { padding: 28px 22px 8px 0; position: relative; }
    .pillar + .pillar { padding-left: 22px; border-left: 1px solid #c9ced6; }
    .n { font-family: var(--font-display); font-size: 2.2rem; color: var(--blue); line-height: 1; display: block; margin-bottom: 18px; }
    .ic { color: var(--text); margin-bottom: 16px; }
    h3 { font-family: var(--font-head); font-weight: 800; font-size: 0.92rem; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 10px; }
    .pillar p { font-size: 0.92rem; color: var(--text-soft); }

    .band { background: var(--ink); padding: clamp(56px, 8vw, 96px) 0; }
    .band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
    .quote { margin: 0; font-family: var(--font-display); text-transform: uppercase; font-size: clamp(2.8rem, 6vw, 5.2rem); line-height: 0.95; color: #fff; }
    .sky { color: var(--sky); }

    @media (max-width: 1000px) {
      .grid { grid-template-columns: repeat(2, 1fr); }
      .pillar, .pillar + .pillar { padding: 24px 20px 8px 0; border-left: 0; border-bottom: 1px solid #c9ced6; }
    }
    @media (max-width: 820px) {
      .spread { grid-template-columns: 1fr; }
      .photo img { aspect-ratio: 4 / 3; height: auto; }
      .text-page { text-align: left; }
    }
    @media (max-width: 520px) { .grid { grid-template-columns: 1fr; } }
  `,
})
export class About {
  protected readonly a = about;
  protected readonly c = company;
  protected readonly pillars = pillars;
}
