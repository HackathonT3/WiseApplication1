import { Injectable } from "@angular/core";

@Injectable()
export class WelcomeSlidesService {
    private slide1 = `<GridLayout row="0" rows="*, 2*, *">


<GridLayout width="200%" row="3" horizontalAlignment="center" verticalAlignment="center">
    <Label class="opensans-regular carousel-item-desc" text="\nW!se\nNonprofit for Financial Education, 
    Career readiness programs" textWrap="true"></Label>
</GridLayout>
</GridLayout>
`;

    private slide2 = `<GridLayout row="0" rows="*, 2*, *">


<GridLayout width="200%" row="2" horizontalAlignment="center" verticalAlignment="center">
    <Label class="opensans-regular carousel-item-desc" text="Diverse,Cutting-edge Financial Programs..." textWrap="true"></Label>
</GridLayout>
</GridLayout>
`;

    private slide3 = `<GridLayout row="0" rows="*, 2*, *">

<GridLayout width="200%" row="2" horizontalAlignment="center" verticalAlignment="center">
    <Label class="opensans-regular carousel-item-desc" text="Envisioning nation with every person equipped with real-world skills necessary to achieve their goals." textWrap="true"></Label>
</GridLayout>
</GridLayout>
`;

    private slides;
    constructor() {
        this.slides = [this.slide1, this.slide2, this.slide3];
    }

    getSlides(): any {
        return this.slides;
    }
}
