/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { stringify } from '../util';
import { ComponentFactory } from './component_factory';
export function noComponentFactoryError(component) {
    var error = Error("No component factory found for " + stringify(component) + ". Did you add it to @NgModule.entryComponents?");
    error[ERROR_COMPONENT] = component;
    return error;
}
var ERROR_COMPONENT = 'ngComponent';
export function getComponent(error) {
    return error[ERROR_COMPONENT];
}
var _NullComponentFactoryResolver = /** @class */ (function () {
    function _NullComponentFactoryResolver() {
    }
    _NullComponentFactoryResolver.prototype.resolveComponentFactory = function (component) {
        throw noComponentFactoryError(component);
    };
    return _NullComponentFactoryResolver;
}());
/**
 * @publicApi
 */
var ComponentFactoryResolver = /** @class */ (function () {
    function ComponentFactoryResolver() {
    }
    ComponentFactoryResolver.NULL = new _NullComponentFactoryResolver();
    return ComponentFactoryResolver;
}());
export { ComponentFactoryResolver };
var CodegenComponentFactoryResolver = /** @class */ (function () {
    function CodegenComponentFactoryResolver(factories, _parent, _ngModule) {
        this._parent = _parent;
        this._ngModule = _ngModule;
        this._factories = new Map();
        for (var i = 0; i < factories.length; i++) {
            var factory = factories[i];
            this._factories.set(factory.componentType, factory);
        }
    }
    CodegenComponentFactoryResolver.prototype.resolveComponentFactory = function (component) {
        var factory = this._factories.get(component);
        if (!factory && this._parent) {
            factory = this._parent.resolveComponentFactory(component);
        }
        if (!factory) {
            throw noComponentFactoryError(component);
        }
        return new ComponentFactoryBoundToModule(factory, this._ngModule);
    };
    return CodegenComponentFactoryResolver;
}());
export { CodegenComponentFactoryResolver };
var ComponentFactoryBoundToModule = /** @class */ (function (_super) {
    tslib_1.__extends(ComponentFactoryBoundToModule, _super);
    function ComponentFactoryBoundToModule(factory, ngModule) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.ngModule = ngModule;
        _this.selector = factory.selector;
        _this.componentType = factory.componentType;
        _this.ngContentSelectors = factory.ngContentSelectors;
        _this.inputs = factory.inputs;
        _this.outputs = factory.outputs;
        return _this;
    }
    ComponentFactoryBoundToModule.prototype.create = function (injector, projectableNodes, rootSelectorOrNode, ngModule) {
        return this.factory.create(injector, projectableNodes, rootSelectorOrNode, ngModule || this.ngModule);
    };
    return ComponentFactoryBoundToModule;
}(ComponentFactory));
export { ComponentFactoryBoundToModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50X2ZhY3RvcnlfcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9saW5rZXIvY29tcG9uZW50X2ZhY3RvcnlfcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUlILE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFFbEMsT0FBTyxFQUFDLGdCQUFnQixFQUFlLE1BQU0scUJBQXFCLENBQUM7QUFHbkUsTUFBTSxVQUFVLHVCQUF1QixDQUFDLFNBQW1CO0lBQ3pELElBQU0sS0FBSyxHQUFHLEtBQUssQ0FDZixvQ0FBa0MsU0FBUyxDQUFDLFNBQVMsQ0FBQyxtREFBZ0QsQ0FBQyxDQUFDO0lBQzNHLEtBQWEsQ0FBQyxlQUFlLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDNUMsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsSUFBTSxlQUFlLEdBQUcsYUFBYSxDQUFDO0FBRXRDLE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBWTtJQUN2QyxPQUFRLEtBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBR0Q7SUFBQTtJQUlBLENBQUM7SUFIQywrREFBdUIsR0FBdkIsVUFBMkIsU0FBb0M7UUFDN0QsTUFBTSx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0gsb0NBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUVEOztHQUVHO0FBQ0g7SUFBQTtJQUdBLENBQUM7SUFGUSw2QkFBSSxHQUE2QixJQUFJLDZCQUE2QixFQUFFLENBQUM7SUFFOUUsK0JBQUM7Q0FBQSxBQUhELElBR0M7U0FIcUIsd0JBQXdCO0FBSzlDO0lBR0UseUNBQ0ksU0FBa0MsRUFBVSxPQUFpQyxFQUNyRSxTQUEyQjtRQURTLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBQ3JFLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBSi9CLGVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBOEIsQ0FBQztRQUt6RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7SUFFRCxpRUFBdUIsR0FBdkIsVUFBMkIsU0FBb0M7UUFDN0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzVCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE1BQU0sdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLElBQUksNkJBQTZCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0gsc0NBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDOztBQUVEO0lBQXNELHlEQUFtQjtJQU92RSx1Q0FBb0IsT0FBNEIsRUFBVSxRQUEwQjtRQUFwRixZQUNFLGlCQUFPLFNBTVI7UUFQbUIsYUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFBVSxjQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUVsRixLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsS0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDckQsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzdCLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7SUFDakMsQ0FBQztJQUVELDhDQUFNLEdBQU4sVUFDSSxRQUFrQixFQUFFLGdCQUEwQixFQUFFLGtCQUErQixFQUMvRSxRQUEyQjtRQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUN0QixRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBQ0gsb0NBQUM7QUFBRCxDQUFDLEFBdEJELENBQXNELGdCQUFnQixHQXNCckUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0b3J9IGZyb20gJy4uL2RpL2luamVjdG9yJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vdHlwZSc7XG5pbXBvcnQge3N0cmluZ2lmeX0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCB7Q29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50UmVmfSBmcm9tICcuL2NvbXBvbmVudF9mYWN0b3J5JztcbmltcG9ydCB7TmdNb2R1bGVSZWZ9IGZyb20gJy4vbmdfbW9kdWxlX2ZhY3RvcnknO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9Db21wb25lbnRGYWN0b3J5RXJyb3IoY29tcG9uZW50OiBGdW5jdGlvbikge1xuICBjb25zdCBlcnJvciA9IEVycm9yKFxuICAgICAgYE5vIGNvbXBvbmVudCBmYWN0b3J5IGZvdW5kIGZvciAke3N0cmluZ2lmeShjb21wb25lbnQpfS4gRGlkIHlvdSBhZGQgaXQgdG8gQE5nTW9kdWxlLmVudHJ5Q29tcG9uZW50cz9gKTtcbiAgKGVycm9yIGFzIGFueSlbRVJST1JfQ09NUE9ORU5UXSA9IGNvbXBvbmVudDtcbiAgcmV0dXJuIGVycm9yO1xufVxuXG5jb25zdCBFUlJPUl9DT01QT05FTlQgPSAnbmdDb21wb25lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcG9uZW50KGVycm9yOiBFcnJvcik6IFR5cGU8YW55PiB7XG4gIHJldHVybiAoZXJyb3IgYXMgYW55KVtFUlJPUl9DT01QT05FTlRdO1xufVxuXG5cbmNsYXNzIF9OdWxsQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIGltcGxlbWVudHMgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIHtcbiAgcmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8VD4oY29tcG9uZW50OiB7bmV3ICguLi5hcmdzOiBhbnlbXSk6IFR9KTogQ29tcG9uZW50RmFjdG9yeTxUPiB7XG4gICAgdGhyb3cgbm9Db21wb25lbnRGYWN0b3J5RXJyb3IoY29tcG9uZW50KTtcbiAgfVxufVxuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciB7XG4gIHN0YXRpYyBOVUxMOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgPSBuZXcgX051bGxDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIoKTtcbiAgYWJzdHJhY3QgcmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8VD4oY29tcG9uZW50OiBUeXBlPFQ+KTogQ29tcG9uZW50RmFjdG9yeTxUPjtcbn1cblxuZXhwb3J0IGNsYXNzIENvZGVnZW5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgaW1wbGVtZW50cyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIge1xuICBwcml2YXRlIF9mYWN0b3JpZXMgPSBuZXcgTWFwPGFueSwgQ29tcG9uZW50RmFjdG9yeTxhbnk+PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgZmFjdG9yaWVzOiBDb21wb25lbnRGYWN0b3J5PGFueT5bXSwgcHJpdmF0ZSBfcGFyZW50OiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICBwcml2YXRlIF9uZ01vZHVsZTogTmdNb2R1bGVSZWY8YW55Pikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjdG9yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBmYWN0b3J5ID0gZmFjdG9yaWVzW2ldO1xuICAgICAgdGhpcy5fZmFjdG9yaWVzLnNldChmYWN0b3J5LmNvbXBvbmVudFR5cGUsIGZhY3RvcnkpO1xuICAgIH1cbiAgfVxuXG4gIHJlc29sdmVDb21wb25lbnRGYWN0b3J5PFQ+KGNvbXBvbmVudDoge25ldyAoLi4uYXJnczogYW55W10pOiBUfSk6IENvbXBvbmVudEZhY3Rvcnk8VD4ge1xuICAgIGxldCBmYWN0b3J5ID0gdGhpcy5fZmFjdG9yaWVzLmdldChjb21wb25lbnQpO1xuICAgIGlmICghZmFjdG9yeSAmJiB0aGlzLl9wYXJlbnQpIHtcbiAgICAgIGZhY3RvcnkgPSB0aGlzLl9wYXJlbnQucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50KTtcbiAgICB9XG4gICAgaWYgKCFmYWN0b3J5KSB7XG4gICAgICB0aHJvdyBub0NvbXBvbmVudEZhY3RvcnlFcnJvcihjb21wb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENvbXBvbmVudEZhY3RvcnlCb3VuZFRvTW9kdWxlKGZhY3RvcnksIHRoaXMuX25nTW9kdWxlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RmFjdG9yeUJvdW5kVG9Nb2R1bGU8Qz4gZXh0ZW5kcyBDb21wb25lbnRGYWN0b3J5PEM+IHtcbiAgcmVhZG9ubHkgc2VsZWN0b3I6IHN0cmluZztcbiAgcmVhZG9ubHkgY29tcG9uZW50VHlwZTogVHlwZTxhbnk+O1xuICByZWFkb25seSBuZ0NvbnRlbnRTZWxlY3RvcnM6IHN0cmluZ1tdO1xuICByZWFkb25seSBpbnB1dHM6IHtwcm9wTmFtZTogc3RyaW5nLCB0ZW1wbGF0ZU5hbWU6IHN0cmluZ31bXTtcbiAgcmVhZG9ubHkgb3V0cHV0czoge3Byb3BOYW1lOiBzdHJpbmcsIHRlbXBsYXRlTmFtZTogc3RyaW5nfVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxDPiwgcHJpdmF0ZSBuZ01vZHVsZTogTmdNb2R1bGVSZWY8YW55Pikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZWxlY3RvciA9IGZhY3Rvcnkuc2VsZWN0b3I7XG4gICAgdGhpcy5jb21wb25lbnRUeXBlID0gZmFjdG9yeS5jb21wb25lbnRUeXBlO1xuICAgIHRoaXMubmdDb250ZW50U2VsZWN0b3JzID0gZmFjdG9yeS5uZ0NvbnRlbnRTZWxlY3RvcnM7XG4gICAgdGhpcy5pbnB1dHMgPSBmYWN0b3J5LmlucHV0cztcbiAgICB0aGlzLm91dHB1dHMgPSBmYWN0b3J5Lm91dHB1dHM7XG4gIH1cblxuICBjcmVhdGUoXG4gICAgICBpbmplY3RvcjogSW5qZWN0b3IsIHByb2plY3RhYmxlTm9kZXM/OiBhbnlbXVtdLCByb290U2VsZWN0b3JPck5vZGU/OiBzdHJpbmd8YW55LFxuICAgICAgbmdNb2R1bGU/OiBOZ01vZHVsZVJlZjxhbnk+KTogQ29tcG9uZW50UmVmPEM+IHtcbiAgICByZXR1cm4gdGhpcy5mYWN0b3J5LmNyZWF0ZShcbiAgICAgICAgaW5qZWN0b3IsIHByb2plY3RhYmxlTm9kZXMsIHJvb3RTZWxlY3Rvck9yTm9kZSwgbmdNb2R1bGUgfHwgdGhpcy5uZ01vZHVsZSk7XG4gIH1cbn1cbiJdfQ==