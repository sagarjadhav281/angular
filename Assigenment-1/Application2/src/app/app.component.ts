import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  template: 
  `<div style="text-align:center">
    <h1>Marvellous Systems</h1>
    <h2>Education for better tomorrow</h2>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  user = 'Marvellous Systems';
  public fun(){
	  this.user='Bhagyashree';
  }
}
