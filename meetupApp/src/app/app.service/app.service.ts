import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class appService{
    constructor(private http: Http){
    }
    getCategories(){
      return this.http.get('https://cors-anywhere.herokuapp.com/https://api.meetup.com/2/categories?sign=true&key=5d147b5e313f2b7740673551d291f6f').map( (res)=> res.json())
    }
    
    filterGroups(category_ids:string){
      return this.http.get('https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/groups?category=' + category_ids +'&sign=true&key=5d147b5e313f2b7740673551d291f6f').map( (res)=> res.json())
    }
}
