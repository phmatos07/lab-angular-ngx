import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'for',
  templateUrl: './@for.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./@for.component.scss']
})
export class ForComponent {
  list = signal([
    {
      title: 'Item 01',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, tenetur, omnis labore minima ducimus quasi, non repellat aut voluptatem corrupti placeat velit! Aperiam repellendus quasi, dicta explicabo enim non tempore.',
    },
    {
      title: 'Item 02',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, tenetur, omnis labore minima ducimus quasi, non repellat aut voluptatem corrupti placeat velit! Aperiam repellendus quasi, dicta explicabo enim non tempore.',
    },
    {
      title: 'Item 03',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, tenetur, omnis labore minima ducimus quasi, non repellat aut voluptatem corrupti placeat velit! Aperiam repellendus quasi, dicta explicabo enim non tempore.',
    },
  ]);
}
