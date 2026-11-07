import { ChangeDetectionStrategy, Component } from '@angular/core';
import { processSteps } from '../data/catalog';
import { Icon } from './icon';

/** The six-step order flow from the catalogue: dashed path, black icon discs with navy rings, big navy numerals. */
@Component({
  selector: 'pr-process',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <section class="process" id="process" aria-labelledby="process-title">
      <div class="wrap">
        <header class="head">
          <span class="eyebrow">From brief to delivery</span>
          <h2 id="process-title" class="display">Our Process</h2>
        </header>

        <ol class="steps">
          @for (s of steps; track s.title; let i = $index) {
            <li class="step" [class.flip]="i % 2 === 1">
              <span class="num">{{ i + 1 }}</span>
              <span class="disc"><pr-icon [name]="s.icon" [size]="34" [stroke]="1.6" /></span>
              <div class="copy">
                <h3>{{ s.title }}</h3>
                <p>{{ s.text }}</p>
              </div>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .process { background: #fff; padding: clamp(72px, 10vw, 128px) 0; }
    .head { text-align: center; margin-bottom: clamp(40px, 6vw, 72px); }
    .head .eyebrow { color: var(--blue); display: block; margin-bottom: 12px; }
    .head .display { color: var(--text); }
    .steps { list-style: none; margin: 0 auto; padding: 0; max-width: 980px; position: relative; display: grid; gap: clamp(28px, 4vw, 44px); }
    .steps::before { content: ''; position: absolute; left: 50%; top: 20px; bottom: 20px; border-left: 2px dashed #2a2f3a; transform: translateX(-1px); }
    .step { display: grid; grid-template-columns: 1fr 112px 1fr; align-items: center; gap: 28px; position: relative; }
    .num { font-family: var(--font-display); font-size: clamp(3.5rem, 7vw, 5rem); line-height: 1; color: var(--royal); text-align: right; }
    .disc {
      width: 112px; height: 112px; border-radius: 50%; background: #0b0b0d; color: #fff; display: grid; place-items: center;
      box-shadow: 0 0 0 5px #fff, 0 0 0 9px var(--royal); position: relative; z-index: 1;
    }
    .copy h3 { font-family: var(--font-head); font-weight: 800; font-size: 1.02rem; letter-spacing: 0.02em; text-transform: uppercase; color: var(--royal); margin-bottom: 8px; line-height: 1.25; }
    .copy p { margin: 0; color: var(--text-soft); font-size: 0.95rem; max-width: 42ch; }
    .flip .num { order: 3; text-align: left; }
    .flip .copy { order: 1; text-align: right; }
    .flip .copy p { margin-left: auto; }
    .flip .disc { order: 2; }

    @media (max-width: 760px) {
      .steps::before { left: 40px; }
      .step, .flip { grid-template-columns: 80px 1fr; gap: 6px 22px; }
      .disc { width: 80px; height: 80px; grid-row: 1 / span 2; order: 0 !important; }
      .disc pr-icon { transform: scale(0.8); }
      .num, .flip .num { order: 1 !important; text-align: left; font-size: 2.6rem; }
      .copy, .flip .copy { order: 2 !important; text-align: left; grid-column: 2; }
      .flip .copy p { margin-left: 0; }
    }
  `,
})
export class Process {
  protected readonly steps = processSteps;
}
