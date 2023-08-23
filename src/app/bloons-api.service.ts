import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BloonsAPIService {

    private apiUrl = "/api/btd/v3/towers";

    constructor(private http: HttpClient) { }

    getAllTowers(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}
