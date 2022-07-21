import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  form: any= FormGroup;

  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',{
        validators:[Validators.required, Validators.minLength(3)]
      }]
    });
  }

  getErrorMessageFieldName(){
    const field = this.form.get('name');

    if(field.hasError('required')){
      return 'The name field is required'; 
    }

    if(field.hasError('minlength')){
      return 'The minimum length is 3';
    }

    return '';
  }

  saveChanges(){
      this.onSaveChanges.emit(this.form.value);
  }

}
