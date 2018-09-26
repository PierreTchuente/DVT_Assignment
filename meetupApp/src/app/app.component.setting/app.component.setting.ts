import { Component } from '@angular/core';

@Component ({
    selector: 'setting',
    template: `<h4>List of Categories. Select a category</h4><category></category>` //'./app.component.setting.html'
})

export class SettingComponent{
 selectedCategory: string
 constructor(){
     this.selectedCategory = "Unknown";
 }

}