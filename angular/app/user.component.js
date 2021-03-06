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
var core_1 = require('@angular/core');
var user_service_1 = require('./user.service');
var UserComponent = (function () {
    function UserComponent(userService) {
        this.userService = userService;
    }
    UserComponent.prototype.search = function (term) {
        this.items = this.userService.getUser(term);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'my-user',
            template: "\n    <h1>User Demo</h1>\n    <p><i>Fetches after each keystroke</i></p>\n    <input #term (keyup)=\"search(term.value)\"/>\n    <ul>\n      <li *ngFor=\"let item of items | async\">{{item}}</li>\n    </ul>\n  ",
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map