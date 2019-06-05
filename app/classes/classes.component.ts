import { Component, OnInit } from '@angular/core';
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "./nativescript-cardview";

registerElement("CardView", () => CardView);

@Component({
  selector: 'ns-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
  moduleId: module.id,
})
export class ClassesComponent implements OnInit {

  data = [];
  constructor() { }

  ngOnInit(): void {
    this.data.push({ heading: "Getting Started", content: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger." });
    this.data.push({ heading: "Level 1", content: "To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon." });
    this.data.push({ heading: "Level 2", content: "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people." });
    this.data.push({ heading: "Level 3", content: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely." });
    this.data.push({ heading: "Level 4", content: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color." });}

}
