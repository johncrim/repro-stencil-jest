import { Component, Prop, h, Element } from '@stencil/core';
import { format } from '../../utils/utils';
import { resizeObservable } from '../../../libs/util/util';
import { Subscription } from 'rxjs';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Element() private readonly _elt!: HTMLElement;

  private _resizeSubscription?: Subscription;

  connectedCallback() {
    this._resizeSubscription = resizeObservable(this._elt).subscribe({
      next: e => console.log('Resized', e)
    });
  }

  disconnectedCallback() {
    this._resizeSubscription?.unsubscribe();
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
