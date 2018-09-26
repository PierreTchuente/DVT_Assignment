import { Component } from '@angular/core';

@Component ({
    selector: 'group',
    templateUrl: './app.component.group.html'
})

export class GroupComponent{
    id: number;
    name: string;
    sort_name: string;
    shortname: string;

    constructor (){
        this.id  = 0;
        this.name = "unknown";
        this.sort_name = "unknown";
        this.shortname = "unknown";
    }
}