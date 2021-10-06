import { Component, OnInit } from '@angular/core';
import { Preke } from './preke.model'

@Component({
  selector: 'app-prekes',
  templateUrl: './prekes.component.html',
  styleUrls: ['./prekes.component.css']
})
export class PrekesComponent implements OnInit {

  pavadinimas: string = "";
  kiekis: string = "";
  prekes: Preke[]= [];

  addPreke(){
    if(this.pavadinimas!="" && this.kiekis!=""){
    this.prekes.push(new Preke (this.pavadinimas, this.kiekis));
    this.pavadinimas = "";
    this.kiekis = "";
  }
  }

  trinti(i){
    this.prekes.splice(i,1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
