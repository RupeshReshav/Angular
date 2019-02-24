import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
               <img src='{{imagePath}}'/>
               <h2>My full name {{ getFullName()}} </h2>
               <h1>{{pageheader ? pageheader : 'No Header'}}</h1> 
               
               <my-employee></my-employee>
              
              
             `

})
export class AppComponent {
    pageheader = 'Employee Detail';
    imagePath: string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    firstName: string = "Rupeh";
    lastName: string = "Sah";
    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}