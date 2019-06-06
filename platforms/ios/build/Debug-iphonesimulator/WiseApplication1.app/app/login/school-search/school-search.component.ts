import { Component, OnInit } from '@angular/core';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { ModalDialogParams, RouterExtensions } from 'nativescript-angular';
import { Page, isAndroid } from 'tns-core-modules/ui/page/page';
import { ActivatedRoute } from '@angular/router';
import { SearchBar } from "tns-core-modules/ui/search-bar";
class DataItem {
	constructor(public name: string) {
	}
}

@Component({
  selector: 'ns-school-search',
  templateUrl: './school-search.component.html',
  styleUrls: ['./school-search.component.css'],
  moduleId: module.id,
})
export class SchoolSearchComponent implements OnInit {

	private _searchedText: string = '';
	private arraySchools: Array<DataItem> = [];
	public schools: ObservableArray<DataItem> = new ObservableArray<DataItem>();
	public isFrom: boolean = false;

	constructor(private _params: ModalDialogParams, private _page: Page, private router: RouterExtensions, private _activeRoute: ActivatedRoute) {
		this.arraySchools.push(new DataItem("Rotterdam The Hague Airport"));
		this.arraySchools.push(new DataItem("Chiclayo Capitán FAP José Quiñones G. Airport"));
		this.arraySchools.push(new DataItem("Lima Jorge Chávez International Airport"));
		this.arraySchools.push(new DataItem("Arequipa Rodríguez Ballón Airport"));
		this.arraySchools.push(new DataItem("Cuzco Alejandro Velazco Astete Airport"));
		this.arraySchools.push(new DataItem("Atlanta Hartsfield-Jackson International Airport"));
		this.arraySchools.push(new DataItem("New York John F. Kennedy International Airport"));
		this.arraySchools.push(new DataItem("New York LaGuardia Airport"));
		this.arraySchools.push(new DataItem("San Diego International Airport"));

		this.schools = new ObservableArray<DataItem>(this.arraySchools);

		this.isFrom = this._params.context.isFrom;
	}

	ngOnInit() {
	}

	onClose(): void {
		this._params.closeCallback("return value");
	}

	onSelectItem(args) {
		let school = (this._searchedText !== "") ? this.schools.getItem(args.index) : this.arraySchools[args.index];
		this._params.closeCallback({
			isFrom: this.isFrom,
			school: school
		});
	}

	public onSubmit(args) {
		let searchBar = <SearchBar>args.object;
		let searchValue = searchBar.text.toLowerCase();
		this._searchedText = searchValue;

		this.schools = new ObservableArray<DataItem>();
		if (searchValue !== "") {
			for (let i = 0; i < this.arraySchools.length; i++) {
				if (this.arraySchools[i].name.toLowerCase().indexOf(searchValue) !== -1) {
					this.schools.push(this.arraySchools[i]);
				}
			}
		}
	}

	public searchBarLoaded(args) {
		let searchBar = <SearchBar>args.object;
		searchBar.dismissSoftInput();

		if (isAndroid) {
			searchBar.android.clearFocus();
		}

		searchBar.text = "";
	}

	public onClear(args) {
		let searchBar = <SearchBar>args.object;
		searchBar.text = "";
		searchBar.hint = "Search for a school";

		this.schools = new ObservableArray<DataItem>();
		this.arraySchools.forEach(item => {
			this.schools.push(item);
		});
	}

	public onTextChanged(args) {
		this.onSubmit(args);
	}
}
