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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var appService = (function () {
    function appService(http) {
        this.http = http;
        this.selectedCategory = null;
    }
    appService.prototype.getCategories = function () {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://api.meetup.com/2/categories?sign=true&key=5d147b5e313f2b7740673551d291f6f').map(function (res) { return res.json(); });
    };
    appService.prototype.filterGroups = function (category_ids) {
        return this.http.get('https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/groups?category=' + category_ids + '&sign=true&key=5d147b5e313f2b7740673551d291f6f').map(function (res) { return res.json(); });
    };
    return appService;
}());
appService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], appService);
exports.appService = appService;
//# sourceMappingURL=app.service.js.map