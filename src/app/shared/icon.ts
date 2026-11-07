import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IconName } from '../data/catalog';

/** Line icons drawn to match the thin-stroke icon style used throughout the catalogue. */
const PATHS: Record<IconName, string> = {
  polo: 'M8 3l-5 3 2 5 3-1.5V21h8V9.5l3 1.5 2-5-5-3-2 2.5h-4zM10 5.5l2 3 2-3M12 8.5v4',
  pants: 'M7 3h10l1 18h-4l-2-11-2 11H6zM7 6h10',
  shoe: 'M2 15c0-2 1-4 2-5l3 1c2 .7 3 2 5 2.6L20 15c1.5.5 2 1.5 2 3H2zM2 18h20M9 12l1-2M12 13l1-2',
  sock: 'M9 2h6v9l3.5 3.5a3 3 0 0 1-4.2 4.2L9 13.4zM9 5h6',
  bag: 'M6 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM9 7V5a3 3 0 0 1 6 0v2M8 13h8v4H8z',
  badge: 'M5 3h14v18H5zM9 8c0-1.7 1.3-3 3-3s3 1.3 3 3M9 12v4M12 10v6M15 12v4',
  box: 'M12 2l9 5v10l-9 5-9-5V7zM3 7l9 5 9-5M12 12v10M7.5 4.5l9 5',
  feather: 'M20 4C12 4 6 10 6 18l-2 2M6 18c6 0 10-4 12-10M10 14h5M8 16h3',
  cushion: 'M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM3 14l9 4 9-4M3 17l9 4 9-4M10 6l2 2',
  mesh: 'M8 9V3M5 6l3-3 3 3M16 9V3M13 6l3-3 3 3M3 13h18M3 17h18M6 11v8M10 11v8M14 11v8M18 11v8',
  shield: 'M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5zM12 5l5 2v4c0 3.5-2.2 6.3-5 7.8',
  sole: 'M12 2c3 0 5 3 5 7 0 3-1 5-1 8 0 3-2 5-4 5s-4-2-4-5c0-3-1-5-1-8 0-4 2-7 5-7zM10 6h4M9.5 9h5M10 12h4M10.5 15h3M10.5 18h3',
  shock: 'M7 3v8M4 6l3-3 3 3M17 3v8M14 6l3-3 3 3M2 15c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6 0M2 19c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6 0',
  pen: 'M14.5 4.5l5 5L9 20H4v-5zM12.5 6.5l5 5M3 22h18',
  'shirt-frame': 'M3 3h18v18H3zM9 7L6 8.5l1 3 1.5-.5V17h7v-6l1.5.5 1-3L15 7l-1 1.2h-4z',
  document: 'M6 2h9l4 4v16H6zM15 2v4h4M9 10h7M9 13h7M9 16h3M14 18l2 2 3-4',
  ruler: 'M3 16L16 3l5 5L8 21zM7 12l2 2M10 9l2 2M13 6l2 2M5.5 14.5l1 1M8.5 11.5l1 1',
  gear: 'M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1M10.2 12l1.3 1.3 2.4-2.6',
  package: 'M12 2l9 5v10l-9 5-9-5V7zM3 7l9 5 9-5M12 12v10M7.5 4.5l9 5v4',
  truck: 'M2 6h12v10H2zM14 9h4l4 4v3h-8zM6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  cap: 'M3 16c0-5 4-9 9-9s9 4 9 9zM12 7V5M21 16l1.5 1.5H3',
  search: 'M10.5 3a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zM16 16l5.5 5.5M7.5 10.5h6M10.5 7.5v6',
  factory: 'M2 21V10l6 4V10l6 4V6l4-3v18zM2 21h20M6 17h2M11 17h2M16 17h2',
  chart: 'M3 3v18h18M7 15l4-4 3 3 6-7M16 7h4v4',
  support: 'M4 13v-1a8 8 0 0 1 16 0v1M4 13h3v6H4zM17 13h3v6h-3zM20 19c0 1.5-2 2.5-5 2.5',
  layers: 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5',
};

@Component({
  selector: 'pr-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true', style: 'display:inline-flex' },
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" [attr.stroke-width]="stroke()" stroke-linecap="round" stroke-linejoin="round">
      <path [attr.d]="d()" />
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(24);
  readonly stroke = input(1.5);
  protected readonly d = computed(() => PATHS[this.name()]);
}
