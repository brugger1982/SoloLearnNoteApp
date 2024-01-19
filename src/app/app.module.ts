import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';


@NgModule({
  /*declarations: [
    AppComponent
  ],*/
  imports: [
    AppComponent,BrowserModule,NotesListComponent,ReactiveFormsModule
  ],
  providers: [],
  declarations: [
    
  ],
  /*bootstrapApplication: [AppComponent],
  declarations: [
    NotesListComponent
  ]*/
})
export class AppModule { }
