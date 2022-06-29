import { Component, HostListener, ViewChild, ElementRef, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h2>Child component</h2>
    <ng-content select="button"></ng-content>
  `,
  styles: [
    `
      :host {
        display: inline-block;
        border: solid 1px red;
        padding: 10px;
      }
      :host.my-class {
        background-color: yellow;
      }
    `,
  ],
})
export class HelloComponent implements AfterContentInit {
  @ContentChild('myButton') button: ElementRef;

  ngAfterContentInit() {}
}
