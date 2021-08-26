import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servies/api.service';
import { Country } from '../shared/countries.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  sreachFilet: string;
  sourceCountries: Country[];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // this.countries = this.api.AllCountries();
    this.api
      .AllCountries()
      .subscribe((sourceCountries) => (this.sourceCountries = sourceCountries));
  }

  get countries() {
    return this.sourceCountries
      ? this.sourceCountries.filter((country) =>
          this.sreachFilet
            ? country.name
                .toLowerCase()
                .includes(this.sreachFilet.toLowerCase())
            : country
        )
      : this.sourceCountries;
  }
}
