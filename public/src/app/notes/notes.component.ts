import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Http } from '@angular/http';
import { Notes } from '../notes'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
	allNotes: Notes[]=[];
	note: string;
	createdAt: Date;
  constructor(private _notesService: NotesService, private _http: Http) { 
	
  }

  ngOnInit() {
	  this._notesService.getAll((data) => {
		  	for (let x in data){
				  this.allNotes.push(data[x])
			  }
	  });
  }

  onSubmit(){
		var newNote = new Notes();
			newNote.content = this.note;
		this.allNotes.push(newNote);
		this._notesService.addNote(newNote)
  }

}
