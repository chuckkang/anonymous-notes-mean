import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Notes } from './notes';
import "rxjs";
@Injectable()


export class NotesService {
	private _notes: Notes[] = [];
	note: string;
  constructor(private _http: Http) {   }

  getAll(callback){
	  // OPTION 2 - USING A CALLBACK
	 
	  this._http.get('/notes').subscribe(
			  (response) => {
				  this._notes = response.json();
				//   console.log(response.json(), "this is the json object")
				  callback(response.json());
			  },
			  (error) => {
				  callback(error);
			  }
		  )
	  } 
addNote(note: Notes) {

	this._http.post('/notes', note).toPromise()
	  .then(data => {
      console.log("inside then of promise")
      console.log(data)})
    .catch(err => {
      console.log("in api service promise catch")
      console.log(err)});
}
  }



