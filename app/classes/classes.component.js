"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_cardview_1 = require("./nativescript-cardview");
element_registry_1.registerElement("CardView", function () { return nativescript_cardview_1.CardView; });
var ClassesComponent = /** @class */ (function () {
    function ClassesComponent() {
        this.data = [];
    }
    ClassesComponent.prototype.ngOnInit = function () {
        this.data.push({ heading: "Getting Started", content: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger." });
        this.data.push({ heading: "Level 1", content: "To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon." });
        this.data.push({ heading: "Level 2", content: "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people." });
        this.data.push({ heading: "Level 3", content: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely." });
        this.data.push({ heading: "Level 4", content: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color." });
    };
    ClassesComponent = __decorate([
        core_1.Component({
            selector: 'ns-classes',
            templateUrl: './classes.component.html',
            styleUrls: ['./classes.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [])
    ], ClassesComponent);
    return ClassesComponent;
}());
exports.ClassesComponent = ClassesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3Nlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGFzc2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwRUFBd0U7QUFDeEUsaUVBQW1EO0FBRW5ELGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxnQ0FBUSxFQUFSLENBQVEsQ0FBQyxDQUFDO0FBUTVDO0lBR0U7UUFEQSxTQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ00sQ0FBQztJQUVqQixtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLG1KQUFtSixFQUFFLENBQUMsQ0FBQztRQUM3TSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLDZMQUE2TCxFQUFFLENBQUMsQ0FBQztRQUMvTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLHdMQUF3TCxFQUFFLENBQUMsQ0FBQztRQUMxTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLDhMQUE4TCxFQUFFLENBQUMsQ0FBQztRQUNoUCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLCtNQUErTSxFQUFFLENBQUMsQ0FBQztJQUFBLENBQUM7SUFWelAsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1lBQ3RDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDOztPQUNXLGdCQUFnQixDQVk1QjtJQUFELHVCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBDYXJkVmlldyB9IGZyb20gXCIuL25hdGl2ZXNjcmlwdC1jYXJkdmlld1wiO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiBDYXJkVmlldyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWNsYXNzZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2xhc3Nlcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NsYXNzZXMuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBDbGFzc2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBkYXRhID0gW107XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIkdldHRpbmcgU3RhcnRlZFwiLCBjb250ZW50OiBcIkJ1bGJhc2F1ciBjYW4gYmUgc2VlbiBuYXBwaW5nIGluIGJyaWdodCBzdW5saWdodC4gVGhlcmUgaXMgYSBzZWVkIG9uIGl0cyBiYWNrLiBCeSBzb2FraW5nIHVwIHRoZSBzdW7igJlzIHJheXMsIHRoZSBzZWVkIGdyb3dzIHByb2dyZXNzaXZlbHkgbGFyZ2VyLlwiIH0pO1xuICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJMZXZlbCAxXCIsIGNvbnRlbnQ6IFwiVG8gc3VwcG9ydCBpdHMgd2VpZ2h0LCBJdnlzYXVy4oCZcyBsZWdzIGFuZCB0cnVuayBncm93IHRoaWNrIGFuZCBzdHJvbmcuIElmIGl0IHN0YXJ0cyBzcGVuZGluZyBtb3JlIHRpbWUgbHlpbmcgaW4gdGhlIHN1bmxpZ2h0LCBpdOKAmXMgYSBzaWduIHRoYXQgdGhlIGJ1ZCB3aWxsIGJsb29tIGludG8gYSBsYXJnZSBmbG93ZXIgc29vbi5cIiB9KTtcbiAgICB0aGlzLmRhdGEucHVzaCh7IGhlYWRpbmc6IFwiTGV2ZWwgMlwiLCBjb250ZW50OiBcIlRoZXJlIGlzIGEgbGFyZ2UgZmxvd2VyIG9uIFZlbnVzYXVy4oCZcyBiYWNrLiBUaGUgZmxvd2VyIGlzIHNhaWQgdG8gdGFrZSBvbiB2aXZpZCBjb2xvcnMgaWYgaXQgZ2V0cyBwbGVudHkgb2YgbnV0cml0aW9uIGFuZCBzdW5saWdodC4gVGhlIGZsb3dlcuKAmXMgYXJvbWEgc29vdGhlcyB0aGUgZW1vdGlvbnMgb2YgcGVvcGxlLlwiIH0pO1xuICAgIHRoaXMuZGF0YS5wdXNoKHsgaGVhZGluZzogXCJMZXZlbCAzXCIsIGNvbnRlbnQ6IFwiVGhlIGZsYW1lIHRoYXQgYnVybnMgYXQgdGhlIHRpcCBvZiBpdHMgdGFpbCBpcyBhbiBpbmRpY2F0aW9uIG9mIGl0cyBlbW90aW9ucy4gVGhlIGZsYW1lIHdhdmVycyB3aGVuIENoYXJtYW5kZXIgaXMgZW5qb3lpbmcgaXRzZWxmLiBJZiB0aGUgUG9rw6ltb24gYmVjb21lcyBlbnJhZ2VkLCB0aGUgZmxhbWUgYnVybnMgZmllcmNlbHkuXCIgfSk7XG4gICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIkxldmVsIDRcIiwgY29udGVudDogXCJDaGFybWVsZW9uIG1lcmNpbGVzc2x5IGRlc3Ryb3lzIGl0cyBmb2VzIHVzaW5nIGl0cyBzaGFycCBjbGF3cy4gSWYgaXQgZW5jb3VudGVycyBhIHN0cm9uZyBmb2UsIGl0IHR1cm5zIGFnZ3Jlc3NpdmUuIEluIHRoaXMgZXhjaXRlZCBzdGF0ZSwgdGhlIGZsYW1lIGF0IHRoZSB0aXAgb2YgaXRzIHRhaWwgZmxhcmVzIHdpdGggYSBibHVpc2ggd2hpdGUgY29sb3IuXCIgfSk7fVxuXG59XG4iXX0=