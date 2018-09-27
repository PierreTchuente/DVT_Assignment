import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
 
import {appService} from '../app.service/app.service';
import { AppComponent }  from '../app.component/app.component';
import { SettingComponent } from '../app.component.setting/app.component.setting';
import { GroupComponent } from '../app.component.group/app.component.group';
import {CategoryComponent} from '../app.component.category/app.component.category';

var routes = [
  {path: 'setting', component: SettingComponent},
  {path: 'group', component: GroupComponent}
];

@NgModule({
  providers: [appService],
  imports:  [ BrowserModule , RouterModule.forRoot(routes), HttpModule],
  declarations: [ AppComponent, SettingComponent,  GroupComponent, CategoryComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
