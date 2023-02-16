import { Component } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import Plushie from './Plushie';

@Component({
  selector: 'app-new-plushie',
  templateUrl: './new-plushie.component.html',
  styleUrls: ['./new-plushie.component.scss']
})
export class NewPlushieComponent {
  newPlushie = {
    name: '',
    size: 0
  };
  plushies: Plushie[] = [];
  errormsg: string = '';

  onSubmit(){
    this.errormsg = '';
    let tempPlushie: Plushie = new Plushie(this.newPlushie.name, this.newPlushie.size);
    catchError( (error: Error) => {
      return this.errormsg = error.message;
    });
    this.plushies.push(tempPlushie);
    this.newPlushie = {
      name: '',
      size: 0
    };
    console.log(this.plushies);
  }

}
