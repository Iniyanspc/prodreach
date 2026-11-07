import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { shoes, strideOn } from '../../data/catalog';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'pr-strideon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icon],
  templateUrl: './strideon.html',
  styleUrl: './strideon.scss',
})
export class StrideOn {
  protected readonly shoes = shoes;
  protected readonly info = strideOn;
}
