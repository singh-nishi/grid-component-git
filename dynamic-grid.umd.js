(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/http'), require('rxjs/add/operator/toPromise'), require('rxjs/add/operator/catch'), require('rxjs/add/operator/map')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/http', 'rxjs/add/operator/toPromise', 'rxjs/add/operator/catch', 'rxjs/add/operator/map'], factory) :
	(factory((global['dynamic-grid'] = {}),global._angular_core,global._angular_common,global._angular_http));
}(this, (function (exports,_angular_core,_angular_common,_angular_http) { 'use strict';

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
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
SampleService.ctorParameters = function () { return [
    { type: _angular_http.Http, },
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
    { type: _angular_core.Component, args: [{
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
    { type: _angular_core.Directive, args: [{
                selector: '[sampleDirective]'
            },] },
];
/**
 * @nocollapse
 */
SampleDirective.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
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
    { type: _angular_core.Pipe, args: [{
                name: 'samplePipe'
            },] },
    { type: _angular_core.Injectable },
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
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
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

exports.SampleModule = SampleModule;
exports.SampleComponent = SampleComponent;
exports.SampleDirective = SampleDirective;
exports.SamplePipe = SamplePipe;
exports.SampleService = SampleService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
