import { Component, OnInit} from '@angular/core';
import {appService} from '../app.service/app.service';
import { Category } from './Category';

@Component ({
    selector: 'category',
    templateUrl: './app.component.category.html'   
})

export class CategoryComponent implements OnInit { 
   
    disabled: boolean;
    constructor (private appservice: appService){
        this.disabled = false;
    }
    
   //component initialisator
    ngOnInit(): void {
        this.loadCategories();
    }

    //Function to load the list of categories.
    loadCategories (): void {
        
        this.appservice.getCategories().subscribe(
            (data)=> {
                console.log(data);
                this.appservice.categories = data.results;                
            }
        );
    }

    //Methods to select a Category
    selectCategory (event: { target: { checked: any; }; }, categ: Category) {
          
            if(event.target.checked){
                console.log(categ);
                this.appservice.selectedCategory = categ;
                this.disabled = true;
            }
       }

       //Function to reset the category selection if user Change his mind
       reset(){ 

        this.disabled = false;
        var checkElem = document.getElementById("categ" + this.appservice.selectedCategory.id.toString()) as HTMLInputElement;
        checkElem.checked = false;
        this.appservice.selectedCategory = null;
       }
}