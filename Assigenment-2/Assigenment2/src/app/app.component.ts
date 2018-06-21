import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  //: './app.component.html',
  template: `<form>
  <fieldset>
    <legend>Text Input</legend>
    <div style="text-align:center">
      <h2>Marvellous Infosystems</h2>
   </div>
    <p>
      <label>Text Box : </label>
      <input type="text" id="myText" value="text here"/>
    </p>
  </fieldset>
</form>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  user = 'Marvellous Systems';
  public fun(){
	  this.user='Bhagyashree';
  }
}
