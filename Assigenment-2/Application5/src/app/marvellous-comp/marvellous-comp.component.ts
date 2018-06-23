import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'MarvellousComp-Component',
  templateUrl: './marvellous-comp.component.html',
  styleUrls: ['./marvellous-comp.component.css']
})
export class MarvellousCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public Name = "Marvellous";

}
