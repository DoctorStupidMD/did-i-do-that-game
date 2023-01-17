import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'lodash';
import { ComponentChanges } from '../service/prompt.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnChanges {
	public myText: string = "";
	public hasText: boolean = false;

	@ViewChild("name", {static: true})
	nameKey: ElementRef;

  constructor(private router: Router) { }

  ngOnInit() {
  }

	ngOnChanges(changes: ComponentChanges<WelcomeComponent>) {
		if (changes && changes.myText) {
			if (!isEmpty(this.myText)) {
				this.hasText = true;
			}
		}
	}

	startGame() {
		localStorage.setItem("name", this.nameKey.nativeElement.value);

		if (!isEmpty(this.myText)) {
			this.hasText = true;
			this.router.navigateByUrl("/prompt");
		}
	}

	onTextChange(event: string) {
		event ? this.hasText = true : this.hasText = false;
	}
}
