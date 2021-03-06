"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_service_1 = require("../app.service/app.service");
var CategoryComponent = (function () {
    function CategoryComponent(appservice) {
        this.appservice = appservice;
        this.disabled = false;
    }
    //component initialisator
    CategoryComponent.prototype.ngOnInit = function () {
        this.loadCategories();
    };
    //Function to load the list of categories.
    CategoryComponent.prototype.loadCategories = function () {
        var _this = this;
        this.appservice.getCategories().subscribe(function (data) {
            console.log(data);
            _this.appservice.categories = data.results;
        });
    };
    //Methods to select a Category
    CategoryComponent.prototype.selectCategory = function (event, categ) {
        if (event.target.checked) {
            console.log(categ);
            this.appservice.selectedCategory = categ;
            this.disabled = true;
        }
    };
    //Function to reset the category selection if user Change his mind
    CategoryComponent.prototype.reset = function () {
        this.disabled = false;
        var checkElem = document.getElementById("categ" + this.appservice.selectedCategory.id.toString());
        checkElem.checked = false;
        this.appservice.selectedCategory = null;
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    core_1.Component({
        selector: 'category',
        templateUrl: './app.component.category.html'
    }),
    __metadata("design:paramtypes", [app_service_1.appService])
], CategoryComponent);
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=app.component.category.js.map