import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employeecomponent.css'],
})
export class EmployeeComponent
{
    classToApply: string = "fontColor";
    columnspan: number = 2;
    name: string = 'Rupesh';
    address: string = 'Lavaca';
    
    number: number = 4097760213;
    age: number = 25;
    showDetails: boolean = false;
    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}
