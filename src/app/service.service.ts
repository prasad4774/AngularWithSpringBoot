import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {

   }

 
    saveData(product:Product): Observable<any>{

      return this.http.post('http://localhost:9090/api/save',product);
        
    }

    getData():Observable<any>{

      return this.http.get('http://localhost:9090/api/get');
    }

    delete(pid:number):Observable<any>{

      return  this.http.delete('http://localhost:9090/api/delete/'+pid);
    }

}
