import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { colourways, customizationIntro, uniformSet } from '../../data/catalog';
import { Process } from '../../shared/process';

@Component({
  selector: 'pr-customization',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Process],
  template: `
    <section class="sheet">
      <div class="frame">
        <header class="title-bar">
          <span class="stripes" aria-hidden="true"></span>
          <h1>Corporate Uniform Customization</h1>
          <span class="stripes right" aria-hidden="true"></span>
        </header>
        <div class="divider" aria-hidden="true"><span></span></div>
        <p class="intro">{{ intro }}</p>

        <ul class="swatches" aria-label="Colourways">
          @for (c of colourways; track c.code) {
            <li>
              <span class="chip" [style.background]="c.hex"></span>
              <span class="cname">{{ c.name }}</span>
              <span class="code">{{ c.code }}</span>
            </li>
          }
        </ul>

        <div class="board">
          <img src="images/brand/customization.webp" width="1137" height="1300"
               alt="Caps, polos, trousers, socks and shoes shown in Navy Blue, Deep Navy, Royal Navy, Black, Charcoal, Burgundy and Maroon" loading="lazy" />
        </div>
        <span class="bottom-bar" aria-hidden="true"></span>
      </div>
    </section>

    <section class="drawing">
      <div class="wrap drawing-grid">
        <div class="drawing-copy">
          <span class="eyebrow accent">Technical drawing</span>
          <h2 class="display">Uniform<br />Costume Set</h2>
          <p>Every uniform programme starts from a complete technical set, so each component is specified, sized and colour-matched together.</p>
          <ol class="set">
            @for (s of set; track s; let i = $index) {
              <li><span>0{{ i + 1 }}</span>{{ s }}</li>
            }
          </ol>
          <p class="note">Tailor any component with custom logos, embroidery, printing and trims.</p>
          <a routerLink="/contact" class="btn btn--dark">Build Your Set</a>
        </div>
        <figure class="drawing-img">
          <img src="images/brand/technical-drawing.webp" width="1055" height="1491" alt="Technical line drawing of a full uniform set: cap, shirt, pant, socks and shoes" loading="lazy" />
        </figure>
      </div>
    </section>

    <pr-process />
  `,
  styles: `
    .sheet { background: #eceef1; padding: clamp(24px, 4vw, 56px) var(--gutter); }
    .frame { max-width: 1080px; margin: 0 auto; background: #fff; border: 1.5px solid var(--navy); padding: clamp(28px, 4vw, 48px) 0 0; position: relative; overflow: hidden; }
    .title-bar { display: flex; align-items: center; gap: clamp(12px, 2vw, 24px); }
    .title-bar h1 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; font-size: clamp(2rem, 5vw, 3.6rem); line-height: 1; color: #0d1426; text-align: center; flex: 0 1 auto; }
    .stripes {
      flex: 1; min-width: 40px; height: clamp(26px, 4vw, 40px);
      background: linear-gradient(115deg, #172a4d 0 72%, transparent 72% 76%, #6b7489 76% 82%, transparent 82% 86%, #6b7489 86% 92%, transparent 92%);
    }
    .stripes.right { transform: scaleX(-1); }
    .divider { display: flex; justify-content: center; margin: 14px 0 18px; }
    .divider span { width: min(240px, 50%); height: 1px; background: #0d1426; position: relative; }
    .divider span::after { content: ''; position: absolute; left: 50%; top: 50%; width: 7px; height: 7px; background: #0d1426; transform: translate(-50%, -50%) rotate(45deg); }
    .intro { max-width: 64ch; margin: 0 auto 32px; text-align: center; color: var(--text-soft); padding: 0 var(--gutter); font-size: 0.95rem; }
    .swatches { list-style: none; margin: 0 auto 28px; padding: 0 clamp(16px, 3vw, 36px); display: grid; grid-template-columns: repeat(7, 1fr); gap: 12px; }
    .swatches li { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px; }
    .chip { width: 100%; aspect-ratio: 1.6 / 1; box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .08); }
    .cname { font-family: var(--font-head); font-weight: 700; font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; }
    .code { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.06em; }
    .board { padding: 0 clamp(8px, 2vw, 24px); overflow-x: auto; }
    .board img { width: 100%; min-width: 640px; }
    .bottom-bar { display: block; height: 14px; margin-top: 20px; background: linear-gradient(105deg, #172a4d 0 66%, #6b7489 66%); }

    .drawing { background: #fff; padding: clamp(72px, 10vw, 120px) 0; }
    .drawing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 6vw, 80px); align-items: center; }
    .drawing-copy .display { color: var(--text); margin: 10px 0 20px; }
    .drawing-copy > p { color: var(--text-soft); }
    .set { list-style: none; padding: 0; margin: 24px 0; border-top: 1px solid var(--rule); }
    .set li { display: flex; align-items: baseline; gap: 18px; padding: 12px 0; border-bottom: 1px solid var(--rule); font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.9rem; }
    .set span { font-family: var(--font-display); font-size: 1.6rem; color: var(--blue); letter-spacing: 0; font-weight: 400; }
    .note { font-size: 0.92rem; margin-bottom: 24px; }
    .drawing-img { margin: 0; border: 1px solid var(--rule); padding: clamp(12px, 2vw, 24px); }

    @media (max-width: 820px) {
      .swatches { grid-template-columns: repeat(4, 1fr); }
      .drawing-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 480px) { .swatches { grid-template-columns: repeat(3, 1fr); } .stripes { min-width: 20px; } }
  `,
})
export class Customization {
  protected readonly intro = customizationIntro;
  protected readonly colourways = colourways;
  protected readonly set = uniformSet;
}
