import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { accessoryGroups } from '../../data/catalog';

@Component({
  selector: 'pr-accessories',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <section class="intro">
      <div class="wrap intro-grid">
        <div>
          <span class="eyebrow accent">Complete the uniform</span>
          <h1 class="display">Accessories</h1>
        </div>
        <div>
          <p>Backpacks, socks and caps to finish every uniform set. Each item carries a material code — quote it in your enquiry and we'll match it, or have it produced in your brand colours.</p>
          <div class="filters" role="group" aria-label="Filter by material">
            @for (m of materials(); track m) {
              <button type="button" [class.on]="material() === m" [attr.aria-pressed]="material() === m" (click)="material.set(m)">{{ m }}</button>
            }
          </div>
        </div>
      </div>
    </section>

    <div class="sheet">
      <div class="frame">
        @for (g of filtered(); track g.slug) {
          <section class="group" [id]="g.slug" [attr.aria-labelledby]="g.slug + '-h'">
            <h2 class="display gh" [id]="g.slug + '-h'">{{ g.title }}</h2>
            <ul class="items" [class.caps]="g.slug === 'caps'">
              @for (it of g.items; track it.code) {
                <li class="item">
                  <img [src]="it.image" [alt]="g.title + ' ' + it.code + ', ' + it.material" loading="lazy" />
                  <span><b>Material Code :</b> {{ it.code }}</span>
                  <span><b>Material :</b> {{ it.material }}</span>
                </li>
              }
            </ul>
          </section>
        } @empty {
          <p class="empty">No items in that material.</p>
        }
      </div>
    </div>

    <section class="cta">
      <div class="wrap cta-inner">
        <p>Found the codes you need? Send them with quantities and we'll come back with pricing and timelines.</p>
        <a routerLink="/contact" class="btn">Enquire Now</a>
      </div>
    </section>
  `,
  styles: `
    .intro { background: var(--ink); color: var(--on-dark); padding: clamp(56px, 9vw, 112px) 0 clamp(40px, 6vw, 64px); }
    .intro-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 5vw, 64px); align-items: end; }
    .intro .display { color: #fff; margin-top: 10px; }
    .intro p { color: var(--on-dark-soft); }
    .filters { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
    .filters button {
      font-family: var(--font-head); font-weight: 600; font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
      background: transparent; color: #fff; border: 1px solid var(--rule-dark); padding: 8px 14px; cursor: pointer;
      transition: background .2s, border-color .2s;
    }
    .filters button:hover { border-color: #fff; }
    .filters button.on { background: var(--blue); border-color: var(--blue); }

    .sheet { background: #f5f5f5; padding: clamp(24px, 4vw, 56px) var(--gutter); }
    .frame { max-width: var(--wrap); margin: 0 auto; border: 1.5px solid var(--navy); background: #f7f7f7; padding: clamp(24px, 4vw, 56px) clamp(16px, 4vw, 48px); }
    .group + .group { margin-top: clamp(40px, 5vw, 64px); }
    .gh { color: var(--navy); font-size: clamp(3rem, 6vw, 4.6rem); display: flex; align-items: center; gap: 24px; margin-bottom: 28px; }
    .gh::after { content: ''; flex: 1; height: 2px; background: var(--navy); }
    .items { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 28px 20px; }
    .items.caps { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); }
    .item { display: flex; flex-direction: column; gap: 2px; font-family: var(--font-head); font-size: 0.66rem; letter-spacing: 0.02em; text-transform: uppercase; color: #111; }
    .item b { font-weight: 700; }
    .item img { width: 100%; aspect-ratio: 1 / 1; object-fit: contain; margin-bottom: 10px; transition: transform .3s; }
    .item:hover img { transform: scale(1.06); }
    .empty { text-align: center; color: var(--muted); }

    .cta { background: var(--mist); padding: clamp(48px, 7vw, 80px) 0; border-top: 1px solid #e3e4e7; }
    .cta-inner { display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; }
    .cta p { margin: 0; font-family: var(--font-head); font-weight: 600; font-size: 1.1rem; max-width: 52ch; }

    @media (max-width: 820px) { .intro-grid { grid-template-columns: 1fr; } }
    @media (max-width: 420px) { .items, .items.caps { grid-template-columns: 1fr 1fr; gap: 24px 14px; } }
  `,
})
export class Accessories {
  protected readonly material = signal('All');
  protected readonly materials = computed(() => [
    'All',
    ...new Set(accessoryGroups.flatMap((g) => g.items.map((i) => i.material))),
  ]);
  protected readonly filtered = computed(() => {
    const m = this.material();
    if (m === 'All') return accessoryGroups;
    return accessoryGroups
      .map((g) => ({ ...g, items: g.items.filter((i) => i.material === m) }))
      .filter((g) => g.items.length);
  });
}
