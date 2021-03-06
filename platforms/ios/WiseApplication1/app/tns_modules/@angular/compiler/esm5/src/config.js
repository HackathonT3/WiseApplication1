/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ViewEncapsulation } from './core';
import { noUndefined } from './util';
var CompilerConfig = /** @class */ (function () {
    function CompilerConfig(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.defaultEncapsulation, defaultEncapsulation = _c === void 0 ? ViewEncapsulation.Emulated : _c, _d = _b.useJit, useJit = _d === void 0 ? true : _d, _e = _b.jitDevMode, jitDevMode = _e === void 0 ? false : _e, _f = _b.missingTranslation, missingTranslation = _f === void 0 ? null : _f, preserveWhitespaces = _b.preserveWhitespaces, strictInjectionParameters = _b.strictInjectionParameters;
        this.defaultEncapsulation = defaultEncapsulation;
        this.useJit = !!useJit;
        this.jitDevMode = !!jitDevMode;
        this.missingTranslation = missingTranslation;
        this.preserveWhitespaces = preserveWhitespacesDefault(noUndefined(preserveWhitespaces));
        this.strictInjectionParameters = strictInjectionParameters === true;
    }
    return CompilerConfig;
}());
export { CompilerConfig };
export function preserveWhitespacesDefault(preserveWhitespacesOption, defaultSetting) {
    if (defaultSetting === void 0) { defaultSetting = false; }
    return preserveWhitespacesOption === null ? defaultSetting : preserveWhitespacesOption;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQTZCLGlCQUFpQixFQUFDLE1BQU0sUUFBUSxDQUFDO0FBR3JFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFbkM7SUFRRSx3QkFDSSxFQVFNO1lBUk4sNEJBUU0sRUFSTCw0QkFBaUQsRUFBakQsc0VBQWlELEVBQUUsY0FBYSxFQUFiLGtDQUFhLEVBQUUsa0JBQWtCLEVBQWxCLHVDQUFrQixFQUNwRiwwQkFBeUIsRUFBekIsOENBQXlCLEVBQUUsNENBQW1CLEVBQUUsd0RBQXlCO1FBUTVFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsMEJBQTBCLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLEtBQUssSUFBSSxDQUFDO0lBQ3RFLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7O0FBRUQsTUFBTSxVQUFVLDBCQUEwQixDQUN0Qyx5QkFBeUMsRUFBRSxjQUFzQjtJQUF0QiwrQkFBQSxFQUFBLHNCQUFzQjtJQUNuRSxPQUFPLHlCQUF5QixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQztBQUN6RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGF9IGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge01pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7SWRlbnRpZmllcnN9IGZyb20gJy4vaWRlbnRpZmllcnMnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7bm9VbmRlZmluZWR9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBDb21waWxlckNvbmZpZyB7XG4gIHB1YmxpYyBkZWZhdWx0RW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb258bnVsbDtcbiAgcHVibGljIHVzZUppdDogYm9vbGVhbjtcbiAgcHVibGljIGppdERldk1vZGU6IGJvb2xlYW47XG4gIHB1YmxpYyBtaXNzaW5nVHJhbnNsYXRpb246IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5fG51bGw7XG4gIHB1YmxpYyBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBib29sZWFuO1xuICBwdWJsaWMgc3RyaWN0SW5qZWN0aW9uUGFyYW1ldGVyczogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHtkZWZhdWx0RW5jYXBzdWxhdGlvbiA9IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLCB1c2VKaXQgPSB0cnVlLCBqaXREZXZNb2RlID0gZmFsc2UsXG4gICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uID0gbnVsbCwgcHJlc2VydmVXaGl0ZXNwYWNlcywgc3RyaWN0SW5qZWN0aW9uUGFyYW1ldGVyc306IHtcbiAgICAgICAgZGVmYXVsdEVuY2Fwc3VsYXRpb24/OiBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICAgICAgdXNlSml0PzogYm9vbGVhbixcbiAgICAgICAgaml0RGV2TW9kZT86IGJvb2xlYW4sXG4gICAgICAgIG1pc3NpbmdUcmFuc2xhdGlvbj86IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5fG51bGwsXG4gICAgICAgIHByZXNlcnZlV2hpdGVzcGFjZXM/OiBib29sZWFuLFxuICAgICAgICBzdHJpY3RJbmplY3Rpb25QYXJhbWV0ZXJzPzogYm9vbGVhbixcbiAgICAgIH0gPSB7fSkge1xuICAgIHRoaXMuZGVmYXVsdEVuY2Fwc3VsYXRpb24gPSBkZWZhdWx0RW5jYXBzdWxhdGlvbjtcbiAgICB0aGlzLnVzZUppdCA9ICEhdXNlSml0O1xuICAgIHRoaXMuaml0RGV2TW9kZSA9ICEhaml0RGV2TW9kZTtcbiAgICB0aGlzLm1pc3NpbmdUcmFuc2xhdGlvbiA9IG1pc3NpbmdUcmFuc2xhdGlvbjtcbiAgICB0aGlzLnByZXNlcnZlV2hpdGVzcGFjZXMgPSBwcmVzZXJ2ZVdoaXRlc3BhY2VzRGVmYXVsdChub1VuZGVmaW5lZChwcmVzZXJ2ZVdoaXRlc3BhY2VzKSk7XG4gICAgdGhpcy5zdHJpY3RJbmplY3Rpb25QYXJhbWV0ZXJzID0gc3RyaWN0SW5qZWN0aW9uUGFyYW1ldGVycyA9PT0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlc2VydmVXaGl0ZXNwYWNlc0RlZmF1bHQoXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlc09wdGlvbjogYm9vbGVhbiB8IG51bGwsIGRlZmF1bHRTZXR0aW5nID0gZmFsc2UpOiBib29sZWFuIHtcbiAgcmV0dXJuIHByZXNlcnZlV2hpdGVzcGFjZXNPcHRpb24gPT09IG51bGwgPyBkZWZhdWx0U2V0dGluZyA6IHByZXNlcnZlV2hpdGVzcGFjZXNPcHRpb247XG59XG4iXX0=