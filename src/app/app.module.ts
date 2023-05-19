import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { PriorityDirective } from './directive/priority/priority.directive';
import { TodoDirectiveDirective } from './directive/todo-directive/todo-directive.directive';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoAddComponent,
    PriorityDirective,
    TodoDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
