"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var platform_1 = require("tns-core-modules/platform");
var photos_service_1 = require("../../core/photos.service");
var camera_service_1 = require("../../core/camera.service");
var FilterComponent = /** @class */ (function () {
    function FilterComponent(params, photosService, camera) {
        this.params = params;
        this.photosService = photosService;
        this.camera = camera;
        this.filter = 'transparent';
        this.isIOS = platform_1.isIOS;
        this.photo = params.context;
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    FilterComponent.prototype.takePhoto = function () {
        var _this = this;
        this.camera.takePhoto()
            .then(function (imageAsset) {
            _this.photo = imageAsset;
        }).catch(function (err) {
            console.log(err.message);
        });
    };
    FilterComponent.prototype.applyFilter = function (color) {
        this.filter = color;
    };
    FilterComponent.prototype.usePhoto = function () {
        /*
        get the base64 of the image and uploat it to some server here,
        get URL and save it to the array if everything is fine
       
        const source = new ImageSource();
        source.fromAsset(this.photo).then((imageSource: ImageSource) => {
    
        let imageString =  imageSource.toBase64String('png',70);
        console.log('BASE64 image length is: '+ imageString.length + " and is : " + imageString);
        
    });  */
        //instead we will use some random beautiful pic from pixabay
        this.photosService.addPhoto();
        this.onClose('success');
    };
    FilterComponent.prototype.onClose = function (status) {
        this.params.closeCallback(status);
    };
    FilterComponent = __decorate([
        core_1.Component({
            selector: "Filter",
            moduleId: module.id,
            templateUrl: "./filter.component.html",
            styleUrls: ['./filter.component.css']
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            photos_service_1.PhotosService,
            camera_service_1.CameraService])
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0VBQXNFO0FBRXRFLHNEQUFrRDtBQUNsRCw0REFBMEQ7QUFDMUQsNERBQTBEO0FBUTFEO0lBTUMseUJBQ1MsTUFBeUIsRUFDekIsYUFBNEIsRUFDNUIsTUFBcUI7UUFGckIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUw5QixXQUFNLEdBQVcsYUFBYSxDQUFDO1FBTzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUFBLGlCQVFDO1FBTkEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7YUFDckIsSUFBSSxDQUFDLFVBQUEsVUFBVTtZQUNmLEtBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUV4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUVyQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUVPOzs7Ozs7Ozs7O1dBVUc7UUFFVCw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsTUFBYztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBdkRXLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3JDLENBQUM7eUNBUWdCLGdDQUFpQjtZQUNWLDhCQUFhO1lBQ3BCLDhCQUFhO09BVGxCLGVBQWUsQ0F3RDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0XCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBQaG90b3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9waG90b3Muc2VydmljZSc7XG5pbXBvcnQgeyBDYW1lcmFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9jYW1lcmEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJGaWx0ZXJcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9maWx0ZXIuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vZmlsdGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHB1YmxpYyBpc0lPUztcblx0cGhvdG86IEltYWdlQXNzZXQ7XG5cdGZpbHRlcjogc3RyaW5nID0gJ3RyYW5zcGFyZW50JztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXG5cdFx0cHJpdmF0ZSBwaG90b3NTZXJ2aWNlOiBQaG90b3NTZXJ2aWNlLFxuXHRcdHByaXZhdGUgY2FtZXJhOiBDYW1lcmFTZXJ2aWNlXG5cdCkge1xuXHRcdHRoaXMuaXNJT1MgPSBpc0lPUztcblx0XHR0aGlzLnBob3RvID0gcGFyYW1zLmNvbnRleHQ7XG5cdH1cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0fVxuXG5cdHRha2VQaG90bygpIHtcblxuXHRcdHRoaXMuY2FtZXJhLnRha2VQaG90bygpXG5cdFx0XHQudGhlbihpbWFnZUFzc2V0ID0+IHtcblx0XHRcdFx0dGhpcy5waG90byA9IGltYWdlQXNzZXQ7XG5cdFx0XHR9KS5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGFwcGx5RmlsdGVyKGNvbG9yOiBzdHJpbmcpIHtcblxuXHRcdHRoaXMuZmlsdGVyID0gY29sb3I7XG5cblx0fVxuXG5cdHVzZVBob3RvKCkge1xuXG4gICAgICAgIC8qXG4gICAgICAgIGdldCB0aGUgYmFzZTY0IG9mIHRoZSBpbWFnZSBhbmQgdXBsb2F0IGl0IHRvIHNvbWUgc2VydmVyIGhlcmUsIFxuICAgICAgICBnZXQgVVJMIGFuZCBzYXZlIGl0IHRvIHRoZSBhcnJheSBpZiBldmVyeXRoaW5nIGlzIGZpbmVcbiAgICAgICBcbiAgICAgICAgY29uc3Qgc291cmNlID0gbmV3IEltYWdlU291cmNlKCk7XG4gICAgICAgIHNvdXJjZS5mcm9tQXNzZXQodGhpcy5waG90bykudGhlbigoaW1hZ2VTb3VyY2U6IEltYWdlU291cmNlKSA9PiB7XG4gICAgXG4gICAgICAgIGxldCBpbWFnZVN0cmluZyA9ICBpbWFnZVNvdXJjZS50b0Jhc2U2NFN0cmluZygncG5nJyw3MCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdCQVNFNjQgaW1hZ2UgbGVuZ3RoIGlzOiAnKyBpbWFnZVN0cmluZy5sZW5ndGggKyBcIiBhbmQgaXMgOiBcIiArIGltYWdlU3RyaW5nKTtcbiAgICAgICAgXG4gICAgfSk7ICAqL1xuXG5cdFx0Ly9pbnN0ZWFkIHdlIHdpbGwgdXNlIHNvbWUgcmFuZG9tIGJlYXV0aWZ1bCBwaWMgZnJvbSBwaXhhYmF5XG5cdFx0dGhpcy5waG90b3NTZXJ2aWNlLmFkZFBob3RvKCk7XG5cdFx0dGhpcy5vbkNsb3NlKCdzdWNjZXNzJyk7XG5cdH1cblxuXHRvbkNsb3NlKHN0YXR1czogc3RyaW5nKSB7XG5cdFx0dGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhzdGF0dXMpO1xuXHR9XG59Il19