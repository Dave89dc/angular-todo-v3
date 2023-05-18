import { Directive, ElementRef, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { DataManagerService } from 'src/app/services/data-manager/data-manager.service';

@Directive({
  selector: '[appTodoDirective]'
})
export class TodoDirectiveDirective {

  _todoDetail?: Todo;

  @Input() set todoDetail(value: Todo){
    this._todoDetail = value;
    this.element.nativeElement.innerHTML = `<mat-card-header>
                                              <mat-card-title>${this._todoDetail.title}</mat-card-title>
                                              <mat-card-subtitle>${this._todoDetail.description}</mat-card-subtitle>
                                            </mat-card-header>`;
  }

  constructor(private element: ElementRef, private dataManagerServ: DataManagerService) { }

}
