import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router) { }
  
  form: any= FormGroup;

  ngOnInit(): void {   
  }

  saveChanges(genreCreationDTO: genreCreationDTO){
  console.log(genreCreationDTO);
      this.router.navigate(['/genres']);
  }

}
