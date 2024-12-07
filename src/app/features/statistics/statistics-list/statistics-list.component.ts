import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../../services/statistics.service';
import { EndpointStatistics } from 'src/app/interfaces/endpoint-statistics';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss']
})
export class StatisticsListComponent implements OnInit {

  endpointStatistics: EndpointStatistics[] = [];

  constructor(private statisticsService: StatisticsService) { }
  ngOnInit(): void {
    this.statisticsService.getAllEndpointStatistics().subscribe({
      next: (data) => {
        this.endpointStatistics = data;
        console.log(JSON.stringify(this.endpointStatistics[0].endpointId));
      },
      error: (err) => {
        console.log('Error fetching endpoints');
      }
    });
  }
}
