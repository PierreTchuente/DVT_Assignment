import { Component } from '@angular/core';
import {appService} from '../app.service/app.service';

@Component ({
    selector: 'setting',
    template: `<h4>List of Categories. Select a category</h4><category></category>` //'./app.component.setting.html'
})

export class SettingComponent{

    constructor(private appservice: appService){
    }
}