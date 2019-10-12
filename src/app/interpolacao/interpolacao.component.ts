import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent implements OnInit {

  constructor() { }

  title;
  subTitle;
  text;
  save = false;

  ngOnInit() {
  }

  ok(){
    this.save = !this.save;
  }

}
