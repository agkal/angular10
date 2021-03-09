import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'youtube';
  name = 'Abdul Ghaffar';
  getName(){
    return this.name
  }
  obj = {
    name: 'peter',
    age: 20
  }
array = ['abdul', 'ghaffar','abbasi']

siteUrl = window.location.href;

printName(name: string){
  alert(name)
}

}
