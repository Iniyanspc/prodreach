import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { garments } from '../../data/catalog';
import { Logo } from '../../shared/logo';

@Component({
  selector: 'pr-apparel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Logo],
  templateUrl: './apparel.html',
  styleUrl: './apparel.scss',
})
export class Apparel {
  protected readonly garments = garments;
  /** Catalogue page numbers: text page, then photo page. Mars 200 starts on page 4. */
  protected pageNo(i: number, offset: 0 | 1) {
    return 4 + i * 2 + offset;
  }
}
