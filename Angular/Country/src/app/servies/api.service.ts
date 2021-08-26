import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../shared/countries.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  AllCountries() {
    return this.http.get<Country[]>(`https://restcountries.eu/rest/v2/all`);
  }
}
