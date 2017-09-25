import { HttpClient } from '@angular/common/http';

export class UserPostService {
    
    constructor(private http: HttpClient) {
    }
    
    sendData(url: string, theData: string) {
       return this.http.post(url, theData);        
    }
}