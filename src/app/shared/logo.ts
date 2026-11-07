import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** ProdReach wordmark: grey "Prod", sky-blue "Reach", rising bar-chart arrow. */
@Component({
  selector: 'pr-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.on-dark]': 'onDark()', '[style.font-size.px]': 'size()' },
  template: `
    <span class="word" aria-hidden="true"><span class="prod">Prod</span><span class="reach">Reach</span></span>
    <svg class="mark" viewBox="0 0 40 40" aria-hidden="true">
      <rect x="6" y="24" width="7" height="12" rx="1" />
      <rect x="16" y="18" width="7" height="18" rx="1" />
      <rect x="26" y="12" width="7" height="24" rx="1" />
      <path d="M4 20 L16 10 L22 14 L33 4" fill="none" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M26 3 L35 2 L34 11 Z" />
    </svg>
    <span class="sr-only">ProdReach</span>
  `,
  styles: `
    :host { display: inline-flex; align-items: flex-end; line-height: 1; font-family: var(--font-body); font-weight: 800; letter-spacing: -0.01em; }
    .word { font-size: 1em; }
    .prod { color: var(--logo-grey); }
    .reach { color: var(--sky); }
    :host(.on-dark) .prod { color: #4f555c; }
    .mark { width: 0.95em; height: 0.95em; margin-left: -0.06em; margin-bottom: 0.32em; fill: var(--sky); stroke: var(--sky); }
  `,
})
export class Logo {
  readonly onDark = input(false);
  readonly size = input(28);
}
