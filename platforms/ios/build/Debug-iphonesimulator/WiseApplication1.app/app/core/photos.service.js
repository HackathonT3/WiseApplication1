"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var local_storage_service_1 = require("./local-storage.service");
var PhotosService = /** @class */ (function () {
    function PhotosService(localStorage) {
        this.localStorage = localStorage;
        this.photos = [
            'https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
            'https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg',
            'https://cdn.pixabay.com/photo/2018/09/22/17/05/ara-3695678__480.jpg',
            'https://cdn.pixabay.com/photo/2018/09/25/21/54/hedgehog-3703244__480.jpg',
            'https://cdn.pixabay.com/photo/2018/09/26/21/24/sweet-corn-3705687__480.jpg'
        ];
        this.photoExamples = [
            'https://cdn.pixabay.com/photo/2018/12/29/23/49/rays-3902368__480.jpg',
            'https://cdn.pixabay.com/photo/2018/08/06/16/30/mushroom-3587888__480.jpg',
            'https://cdn.pixabay.com/photo/2018/12/28/01/34/rum-3898745__480.jpg',
            'https://cdn.pixabay.com/photo/2018/07/16/13/17/kiss-3541905__480.jpg',
            'https://cdn.pixabay.com/photo/2018/12/09/14/44/leaf-3865014__480.jpg',
            'https://cdn.pixabay.com/photo/2018/09/12/12/14/photographer-3672010__480.jpg',
            'https://cdn.pixabay.com/photo/2018/11/11/16/51/ibis-3809147_1280.jpg',
            'https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525_1280.jpg',
            'https://cdn.pixabay.com/photo/2018/11/04/20/21/harley-davidson-3794909__480.jpg',
            'https://cdn.pixabay.com/photo/2018/11/23/14/19/forest-3833973__480.jpg',
            'https://cdn.pixabay.com/photo/2018/11/17/22/15/tree-3822149__480.jpg',
            'https://cdn.pixabay.com/photo/2018/11/06/14/01/pair-3798371__480.jpg',
            'https://cdn.pixabay.com/photo/2018/11/15/22/52/wolf-3818343__480.jpg',
            'https://cdn.pixabay.com/photo/2018/10/31/22/42/surprised-3786845__480.jpg',
            'https://cdn.pixabay.com/photo/2018/05/03/22/34/lion-3372720__480.jpg',
            'https://cdn.pixabay.com/photo/2018/10/05/22/53/sheep-3727049__480.jpg',
            'https://cdn.pixabay.com/photo/2018/04/04/10/11/portrait-3289372__480.jpg',
            '',
        ];
    }
    PhotosService.prototype.getPhotos = function () {
        return this.photos;
    };
    PhotosService.prototype.addPhoto = function () {
        var photoToAdd = this.photoExamples[Math.floor(Math.random() * (this.photoExamples.length - 1)) + 1];
        if (photoToAdd != '') {
            this.photos.unshift(photoToAdd);
            this.localStorage.saveValue(JSON.stringify(this.photos), 'photos');
        }
    };
    PhotosService.prototype.getFromLocalStorage = function () {
        if (!this.localStorage.getValue('photos')) {
            // console.log('FIRST TIME, SAVING VALUES');
            this.localStorage.saveValue(JSON.stringify(this.photos), 'photos');
        }
        else {
            // console.log('NOT FIRST TIME, GETTING VALUES');
            this.photos = JSON.parse(this.localStorage.getValue('photos'));
        }
    };
    PhotosService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [local_storage_service_1.LocalStorage])
    ], PhotosService);
    return PhotosService;
}());
exports.PhotosService = PhotosService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaG90b3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxpRUFBdUQ7QUFHdkQ7SUFpQ0ksdUJBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBN0J0QyxXQUFNLEdBQWE7WUFDdkIsaUdBQWlHO1lBQ2pHLG1IQUFtSDtZQUNuSCxxRUFBcUU7WUFDckUsMEVBQTBFO1lBQzFFLDRFQUE0RTtTQUMvRSxDQUFDO1FBRU0sa0JBQWEsR0FBYTtZQUM5QixzRUFBc0U7WUFDdEUsMEVBQTBFO1lBQzFFLHFFQUFxRTtZQUNyRSxzRUFBc0U7WUFDdEUsc0VBQXNFO1lBQ3RFLDhFQUE4RTtZQUM5RSxzRUFBc0U7WUFDdEUseUVBQXlFO1lBQ3pFLGlGQUFpRjtZQUNqRix3RUFBd0U7WUFDeEUsc0VBQXNFO1lBQ3RFLHNFQUFzRTtZQUN0RSxzRUFBc0U7WUFDdEUsMkVBQTJFO1lBQzNFLHNFQUFzRTtZQUN0RSx1RUFBdUU7WUFDdkUsMEVBQTBFO1lBQzFFLEVBQUU7U0FDTCxDQUFDO0lBRWdELENBQUM7SUFFbkQsaUNBQVMsR0FBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUVJLElBQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9HLElBQUksVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN0RTtJQUNMLENBQUM7SUFFRCwyQ0FBbUIsR0FBbkI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkMsNENBQTRDO1lBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3RFO2FBQU07WUFDSCxpREFBaUQ7WUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDbEU7SUFFTCxDQUFDO0lBekRRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FrQ3lCLG9DQUFZO09BakNyQyxhQUFhLENBMER6QjtJQUFELG9CQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaW1hZ2UtYXNzZXRcIjtcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBob3Rvc1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSB0YWtlblBob3RvOiBJbWFnZUFzc2V0O1xuXG4gICAgcHJpdmF0ZSBwaG90b3M6IHN0cmluZ1tdID0gW1xuICAgICAgICAnaHR0cHM6Ly9jZG4xLm1lZGljYWxuZXdzdG9kYXkuY29tL2NvbnRlbnQvaW1hZ2VzL2FydGljbGVzLzMyMi8zMjI4NjgvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2dpLXJlc291cmNlcy9pbWFnZXMvQ3JlYXRpdmVMYW5kaW5nUGFnZS9IUF9TZXB0XzI0XzIwMTgvQ1IzX0dldHR5SW1hZ2VzLTE1OTAxODgzNi5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOC8wOS8yMi8xNy8wNS9hcmEtMzY5NTY3OF9fNDgwLmpwZycsXG4gICAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzA5LzI1LzIxLzU0L2hlZGdlaG9nLTM3MDMyNDRfXzQ4MC5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOC8wOS8yNi8yMS8yNC9zd2VldC1jb3JuLTM3MDU2ODdfXzQ4MC5qcGcnXG4gICAgXTtcblxuICAgIHByaXZhdGUgcGhvdG9FeGFtcGxlczogc3RyaW5nW10gPSBbXG4gICAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzEyLzI5LzIzLzQ5L3JheXMtMzkwMjM2OF9fNDgwLmpwZycsXG4gICAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzA4LzA2LzE2LzMwL211c2hyb29tLTM1ODc4ODhfXzQ4MC5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOC8xMi8yOC8wMS8zNC9ydW0tMzg5ODc0NV9fNDgwLmpwZycsXG4gICAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzA3LzE2LzEzLzE3L2tpc3MtMzU0MTkwNV9fNDgwLmpwZycsXG4gICAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzEyLzA5LzE0LzQ0L2xlYWYtMzg2NTAxNF9fNDgwLmpwZycsXG4gICAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzA5LzEyLzEyLzE0L3Bob3RvZ3JhcGhlci0zNjcyMDEwX180ODAuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTgvMTEvMTEvMTYvNTEvaWJpcy0zODA5MTQ3XzEyODAuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTgvMTEvMjkvMjEvMTkvaGFtYnVyZy0zODQ2NTI1XzEyODAuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTgvMTEvMDQvMjAvMjEvaGFybGV5LWRhdmlkc29uLTM3OTQ5MDlfXzQ4MC5qcGcnLFxuICAgICAgICAnaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOC8xMS8yMy8xNC8xOS9mb3Jlc3QtMzgzMzk3M19fNDgwLmpwZycsXG4gICAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzExLzE3LzIyLzE1L3RyZWUtMzgyMjE0OV9fNDgwLmpwZycsXG4gICAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzExLzA2LzE0LzAxL3BhaXItMzc5ODM3MV9fNDgwLmpwZycsXG4gICAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzExLzE1LzIyLzUyL3dvbGYtMzgxODM0M19fNDgwLmpwZycsXG4gICAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzEwLzMxLzIyLzQyL3N1cnByaXNlZC0zNzg2ODQ1X180ODAuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTgvMDUvMDMvMjIvMzQvbGlvbi0zMzcyNzIwX180ODAuanBnJyxcbiAgICAgICAgJ2h0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTgvMTAvMDUvMjIvNTMvc2hlZXAtMzcyNzA0OV9fNDgwLmpwZycsXG4gICAgICAgICdodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE4LzA0LzA0LzEwLzExL3BvcnRyYWl0LTMyODkzNzJfXzQ4MC5qcGcnLFxuICAgICAgICAnJyxcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZSkgeyB9XG4gXG4gICAgZ2V0UGhvdG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5waG90b3M7XG4gICAgfVxuXG4gICAgYWRkUGhvdG8oKSB7XG5cbiAgICAgICAgY29uc3QgcGhvdG9Ub0FkZDogc3RyaW5nID0gdGhpcy5waG90b0V4YW1wbGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLnBob3RvRXhhbXBsZXMubGVuZ3RoIC0gMSkpICsgMV07XG4gICAgICAgIGlmIChwaG90b1RvQWRkICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnBob3Rvcy51bnNoaWZ0KHBob3RvVG9BZGQpO1xuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2F2ZVZhbHVlKEpTT04uc3RyaW5naWZ5KHRoaXMucGhvdG9zKSwgJ3Bob3RvcycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsU3RvcmFnZS5nZXRWYWx1ZSgncGhvdG9zJykpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdGSVJTVCBUSU1FLCBTQVZJTkcgVkFMVUVTJyk7XG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zYXZlVmFsdWUoSlNPTi5zdHJpbmdpZnkodGhpcy5waG90b3MpLCAncGhvdG9zJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTk9UIEZJUlNUIFRJTUUsIEdFVFRJTkcgVkFMVUVTJyk7XG4gICAgICAgICAgICB0aGlzLnBob3RvcyA9IEpTT04ucGFyc2UodGhpcy5sb2NhbFN0b3JhZ2UuZ2V0VmFsdWUoJ3Bob3RvcycpKTtcbiAgICAgICAgfVxuXG4gICAgfVxufSJdfQ==