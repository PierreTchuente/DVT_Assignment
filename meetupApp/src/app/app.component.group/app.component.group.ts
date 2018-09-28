import { Component, OnInit } from '@angular/core';
import {appService} from '../app.service/app.service';

@Component ({
    selector: 'group',
    templateUrl: './app.component.group.html'
})

export class GroupComponent{   

    groups: Groups[];

    constructor (private appservice: appService){
    }

    //component initialisator
    ngOnInit(): void {
        this.filterGroup();
    }
    //Function to load the list of categories.
    filterGroup (): void {
        if(this.appservice.selectedCategory !== null){
            this.appservice.filterGroups(this.appservice.selectedCategory.id.toString()).subscribe(
                (data)=> {console.log(data); this.groups = data;}
            );
        }else{
            this.appservice.filterGroups("0").subscribe(  //Default group id
                (data)=> {console.log(data); this.groups = data;})
        }
       
    }
}

interface organizer{
    "id": number;
    "name": string,
    "bio": string
}

interface Groups {
    score:number;
    id:number;
    name: string;
    status: string;
    link: string;
    urlname: string;
    description: string;
    created: string;
    city: string;
    untranslated_city: string;
    localized_country_name: string;
    localized_location: string;
    state: string;
    join_mode: string;
    visibility: string;
    lat: number;
    lon: number;
    organizer: organizer;
}


