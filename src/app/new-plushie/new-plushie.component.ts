import { Component } from '@angular/core';
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
    try{
      let tempPlushie: Plushie = new Plushie(this.newPlushie.name, this.newPlushie.size);
      this.plushies.push(tempPlushie);
    }
    catch(error: any){
      this.errormsg = error.message;
    }
    this.newPlushie = {
      name: '',
      size: 0
    };
    console.log(this.plushies);
  }

}
