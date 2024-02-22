import { HoverAffectDirective } from './hover-affect.directive';
import { ElementRef } from '@angular/core';
describe('HoverAffectDirective', () => {
  it('should create an instance', () => {
    const directiveElement = document.createElement('div');
    const elRefMock = {
      nativeElement: directiveElement
    };
    const directive = new HoverAffectDirective(elRefMock as ElementRef);
    expect(directive).toBeTruthy();
  });
});
