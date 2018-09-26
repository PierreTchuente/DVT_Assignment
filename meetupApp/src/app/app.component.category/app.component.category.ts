import { Component, OnInit } from '@angular/core';
import {appService} from '../app.service/app.service';
import { Category } from './Category';

@Component ({
    selector: 'category',
    templateUrl: './app.component.category.html',
    providers: [appService]
})

export class CategoryComponent implements OnInit {
 
    categories: Category[];
    disabled: boolean;
    selectedCategory: Category

    constructor ( private appservice: appService){
        this.disabled = false;
    }
    
   //component initialisator
    ngOnInit(): void {
        this.loadCategories();
    }

    //Function to load the list of categories.
    loadCategories (): void {
        this.appservice.getCategories().subscribe(
            (data)=> {console.log(data); this.categories = data.results;}
        );
    }

    //Methods to select a Category
    selectCategory (event, categ: Category) {
            console.log(event.target.checked);
            if(event.target.checked){
                console.log(categ);
                this.selectedCategory = categ;
                this.disabled = true;
            }
       }

       //Function to reset the category selection if user Change his mind
       reset(){ 

        this.disabled = false;
        var checkElem = document.getElementById("categ" + this.selectedCategory.id.toString());
        checkElem.checked = false;
        this.selectedCategory = null;

       }
}