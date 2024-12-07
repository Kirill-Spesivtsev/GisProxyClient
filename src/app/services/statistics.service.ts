import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoint } from '../interfaces/endpoint';
import { environment } from '../../environments/environment';
import { EndpointStatistics } from '../interfaces/endpoint-statistics';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  
  private readonly apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getAllEndpoint(): Observable<Endpoint[]> {
    return this.http.get<Endpoint[]>(`${this.apiBaseUrl}/endpoints`);
  }

  getAllEndpointStatistics(): Observable<EndpointStatistics[]> {
    return this.http.get<EndpointStatistics[]>(`${this.apiBaseUrl}/endpoints/statistics`);
  }

  updateEndpointLimit(endpointId: string, limit: number): Observable<any> { 
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); 
    const body = { endpointId, limit }; 
    return this.http.post<any>(`${this.apiBaseUrl}/endpoints/update-limit`, body, { headers }); 
  }

  getEndpointById(id: string): Observable<Endpoint> {
    return this.http.get<Endpoint>(`${this.apiBaseUrl}/endpoints/${id}`);
  }

  deleteEndpointById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/endpoints/${id}`);
  }

  addEndpoint(post: Endpoint): Observable<Endpoint> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Endpoint>(`${this.apiBaseUrl}/endpoints`, post, { headers });
  }
}