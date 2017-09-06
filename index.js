import { Component, Directive, ElementRef, Injectable, NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

var SampleService = (function () {
    /**
     * @param {?} _http
     */
    function SampleService(_http) {
        this._http = _http;
    }
    /**
     * @return {?}
     */
    SampleService.prototype.getValues = function () {
        return this._http.get(this.jsonURL)
            .map(function (response) { return response.json(); });
    };
    return SampleService;
}());
SampleService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
SampleService.ctorParameters = function () { return [
    { type: Http, },
]; };

var SampleComponent = (function () {
    /**
     * @param {?} _myservice
     */
    function SampleComponent(_myservice) {
        this._myservice = _myservice;
        this.data = [];
        this.header = [];
        this.getRecrods(_myservice.jsonURL);
    }
    /**
     * @param {?} Json
     * @return {?}
     */
    SampleComponent.prototype.getRecrods = function (Json) {
        var _this = this;
        this._myservice.getValues().subscribe(function (value) {
            _this.data = value;
            for (var /** @type {?} */ header in _this.data[0]) {
                _this.header.push(header);
            }
        });
    };
    return SampleComponent;
}());
SampleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sample-component',
                //template: `<h1>Sample component</h1>`
                template: "\n   <table border=\"1\">\n        <tr>\n          <th *ngFor=\"let head of header\">{{head}}</th>\n        </tr>\n        <tr *ngFor=\"let data of data\">\n        <td *ngFor=\"let head of header\">\n            {{data[head]}}\n        </td>\n        </tr>\n   </table>\n "
            },] },
];
/**
 * @nocollapse
 */
SampleComponent.ctorParameters = function () { return [
    { type: SampleService, },
]; };

var SampleDirective = (function () {
    /**
     * @param {?} el
     */
    function SampleDirective(el) {
        this.el = el;
    }
    return SampleDirective;
}());
SampleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sampleDirective]'
            },] },
];
/**
 * @nocollapse
 */
SampleDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };

/**
 * Transforms any input value
 */
var SamplePipe = (function () {
    function SamplePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    SamplePipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    return SamplePipe;
}());
SamplePipe.decorators = [
    { type: Pipe, args: [{
                name: 'samplePipe'
            },] },
    { type: Injectable },
];
/**
 * @nocollapse
 */
SamplePipe.ctorParameters = function () { return []; };

var SampleModule = (function () {
    function SampleModule() {
    }
    /**
     * @return {?}
     */
    SampleModule.forRoot = function () {
        return {
            ngModule: SampleModule,
            providers: [SampleService]
        };
    };
    return SampleModule;
}());
SampleModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe
                ],
                exports: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe
                ]
            },] },
];
/**
 * @nocollapse
 */
SampleModule.ctorParameters = function () { return []; };

export { SampleModule, SampleComponent, SampleDirective, SamplePipe, SampleService };
