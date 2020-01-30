import { Component } from '@angular/core';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  countries: NgOption[] = [
    {id: 10, name: 'POLAND'},
    {id: 20, name: 'UK'},
    {id: 30, name: 'GERMANY'},
    {id: 40, name: 'NORWAY'},
    {id: 50, name: 'FINLAND'}
  ];

  selectedCountries = [];
  selectedCountryId: number;

  onChange = ($event: any): void => {
    console.log($event);
    console.log(`SELECTION CHANGED INTO ${$event.name || ''}`);
  }

  onAdd = ($event: any): void => {
    this.selectedCountries.push($event);
    console.log('AFTER ADD OPERATION:');
    console.log(this.selectedCountries);
  }

  onRemove = ($event: any): void => {
    console.log($event);
    this.selectedCountries = this.selectedCountries.filter(country => country.id !== $event.value.id);
    console.log('AFTER DELETE OPERATION:');
    console.log(this.selectedCountries);
  }

}
