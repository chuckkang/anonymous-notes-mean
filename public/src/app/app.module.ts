import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesService } from './notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent
  ],
  imports: [
	BrowserModule,
	  FormsModule,
	  HttpModule,
    AppRoutingModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
