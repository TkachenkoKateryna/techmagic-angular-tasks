import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ApiHttpService {
	private readonly API_ENDPOINT: string =
		'https://jsonplaceholder.typicode.com';

	constructor(private httpClient: HttpClient) {}

	public get<T>(url: string): Observable<T[]> {
		return this.httpClient.get<T[]>(`${this.API_ENDPOINT}/${url}`);
	}

	public post<T>(url: string, value: T): Observable<T> {
		return this.httpClient.post<T>(`${this.API_ENDPOINT}/${url}`, value);
	}

	public delete(url: string, id: number): Observable<void> {
		return this.httpClient.delete<void>(`${this.API_ENDPOINT}/${url}/${id}`);
	}
}
