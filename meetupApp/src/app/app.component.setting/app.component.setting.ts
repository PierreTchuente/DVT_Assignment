import { Component } from '@angular/core';
import {appService} from '../app.service/app.service';
import { Category } from '../app.component.category/Category';

@Component ({
    selector: 'setting',
    template: `<h4>List of Categories. Select a category</h4><category (messageEvent)="receiveMessage($event)"></category>` //'./app.component.setting.html'
})

export class SettingComponent{

    constructor(private appservice: appService){
    }

    //Set the user category as setting.
    receiveMessage(category: Category){
       this.appservice.selectedCategory = category;
    }
}