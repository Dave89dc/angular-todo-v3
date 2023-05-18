import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appPriority]'
})
export class PriorityDirective {

  _priority = '1';

  @Input() set priority(value: string){
    this._priority = value;
    if(this._priority === '2'){
      this.element.nativeElement.style.backgroundColor = 'orange';
    } else if(this._priority === '3'){
      this.element.nativeElement.style.backgroundColor = 'red';
    } else{
      this.element.nativeElement.style.backgroundColor = 'white';
    }
  }

  constructor(private element: ElementRef) { }

}
