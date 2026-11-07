import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { about, categories, company, productLines } from '../../data/catalog';
import { Icon } from '../../shared/icon';
import { Process } from '../../shared/process';

@Component({
  selector: 'pr-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon, Process],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly categories = categories;
  protected readonly lines = productLines;
  protected readonly about = about;
  protected readonly company = company;
}
