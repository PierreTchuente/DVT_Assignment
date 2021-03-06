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
var GroupComponent = (function () {
    function GroupComponent(appservice) {
        this.appservice = appservice;
        this.otherCategoryNames = "";
        if (this.appservice.selectedCategory !== null) {
            this.otherCategoryIds = this.appservice.selectedCategory.id.toString() + ","; //Initialise with the user selected Category.
        }
    }
    //component initialisator
    GroupComponent.prototype.ngOnInit = function () {
        this.filterGroup(); //Load the list of meetup with the user selected Category.
    };
    //Function to load the list of categories.
    GroupComponent.prototype.filterGroup = function () {
        var _this = this;
        if (this.appservice.selectedCategory !== null) {
            this.appservice.filterGroups(this.appservice.selectedCategory.id.toString()).subscribe(function (data) { console.log(data); _this.groups = data; });
        }
        else {
            this.appservice.filterGroups("0").subscribe(//Default group id
            function (data) { console.log(data); _this.groups = data; });
        }
    };
    //Function to get the selected from the dropdown
    GroupComponent.prototype.selectCategory = function (category) {
        if (category !== null) {
            this.otherCategoryIds += category.id + ",";
            this.otherCategoryNames += category.name + "; ";
        }
    };
    //Search all meetup in the categories
    GroupComponent.prototype.Search = function () {
        var _this = this;
        debugger;
        this.appservice.filterGroups(this.otherCategoryIds).subscribe(function (data) { console.log(data); _this.groups = data; });
    };
    return GroupComponent;
}());
GroupComponent = __decorate([
    core_1.Component({
        selector: 'group',
        templateUrl: './app.component.group.html'
    }),
    __metadata("design:paramtypes", [app_service_1.appService])
], GroupComponent);
exports.GroupComponent = GroupComponent;
//# sourceMappingURL=app.component.group.js.map