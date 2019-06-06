import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { View } from "tns-core-modules/ui/core/view";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { GestureEventData } from "tns-core-modules/ui/gestures";
import { ScrollEventData } from "tns-core-modules/ui/scroll-view";
import { screen } from "tns-core-modules/platform";
import { Landmark } from "../landmark";
import { LandmarksService } from "../landmarks-service";
import { AnimationsService } from "../animations-service";

@Component({
	selector: "Details",
	moduleId: module.id,
	templateUrl: "./details.component.html",
	styleUrls: ['./details.component.css']
})
export class DetailsComponent {
	landmark: string;
	@Input() offset: number;
	@Input() imageOpacity: number = 1;
	@Input() dockedLabelOpacity: number = 0;
	@Input() dockedLabelTextOpacity: number = 0;
	@ViewChild("title") titleRef: ElementRef;
	static IMAGE_MIN_HEIGHT = 48;

	constructor(private animationsService: AnimationsService,
		private landmarksService: LandmarksService,
		private routerExtensions: RouterExtensions) {
			
		this.offset = this.animationsService.animationOffset;
		this.landmark = "class description shows here";
	}

	get minHeight() {
		return screen.mainScreen.heightDIPs + 2 * DetailsComponent.IMAGE_MIN_HEIGHT;
	}

	animateIn(view: View, duration: number, delay: number) {
		view.animate({
			scale: { x: 1, y: 1 },
			translate: { x: 0, y: 0 },
			duration: duration,
			delay: delay,
			curve: AnimationCurve.easeOut
		}).catch(() => { });
	}

	animateOut(view: View) {
		view.animate({
			opacity: 0,
			duration: 200
		}).catch(() => { });
	}
	onTap(args: GestureEventData) {
		this.routerExtensions.back();
	}


	private applyTitleTransition(scrollOffset: number, imageHeight: number) {
		let imageHeightMaxChange = imageHeight - DetailsComponent.IMAGE_MIN_HEIGHT;
		let title = this.titleRef.nativeElement;

		if (imageHeightMaxChange < scrollOffset) {
			title.translateX = -(scrollOffset - imageHeightMaxChange) / 1.2;
			title.translateY = -(scrollOffset - imageHeightMaxChange) * 2;
			title.scaleX = 1 - (scrollOffset - imageHeightMaxChange) / imageHeight;
			title.scaleY = 1 - (scrollOffset - imageHeightMaxChange) / imageHeight;
		} else {
			title.translateX = 0;
			title.translateY = 0;
			title.scaleX = 1;
			title.scaleY = 1;
		}
	}

	private applyDockHeaderTransition(scrollOffset: number, imageHeight: number) {
		this.dockedLabelOpacity = this.imageOpacity <= 0 ? 1 : 0;
		this.dockedLabelTextOpacity = (scrollOffset - (imageHeight - DetailsComponent.IMAGE_MIN_HEIGHT)) / DetailsComponent.IMAGE_MIN_HEIGHT - 0.2;
	}
}