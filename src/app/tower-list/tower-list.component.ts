import { Component, OnInit } from '@angular/core';
import { BloonsAPIService } from '../bloons-api.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-tower-list',
	templateUrl: './tower-list.component.html',
	styleUrls: ['./tower-list.component.scss']
})
export class TowerListComponent {
    towers: any = [];

	constructor(private bloonsApiService: BloonsAPIService){}
	ngOnInit():void {
		this.bloonsApiService.getAllTowers().subscribe(
			(data) => {
			  this.towers = data;
			},
			(error) => {
			  console.error('An error occurred:', error);
			}
		  );
	}
}
