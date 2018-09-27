import { Component } from '@angular/core';
import { Category } from '../app.component.category/Category';

@Component ({
    selector: 'setting',
    template: `<h4>List of Categories. Select a category</h4><category (messageEvent)="receiveMessage($event)"></category>` //'./app.component.setting.html'
})

export class SettingComponent{

    selectedCategory: Category; //represent a user category setting.

    constructor(){
        this.selectedCategory = null;
    }

    //Set the user category as setting.
    receiveMessage(category: Category){
       this.selectedCategory = category;
    }
}