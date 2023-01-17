import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { IOptions, IPrompt } from '../service/prompt.model';
import { PromptService } from '../service/prompt.service';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {
	public name: string = "";
	public promptList: IPrompt;
	public currentPrompt: number = 0;
	public points: number = 0;
	correctAnswer: number = 0;
	incorrectAnswer: number = 0;
	progress: number = 0;
	promptListLength: number = 0;
	isGameOver: boolean = false;
	// Comment in all commented out blocks to enable the timer feature (as well as the timer div in the html).
	// public counter: number = 60;
	// interval$: any;

  constructor(private promptService: PromptService) { }

  ngOnInit() {
		this.name = localStorage.getItem("name")!;
		this.getAllPrompts();
		// this.startCounter();
  }

	getAllPrompts() {
		this.promptService.getPromptJson()
			.subscribe(response => {
				this.promptList = response.prompts;
				this.promptListLength = Object.keys(this.promptList).length;
			});
	}

	nextPrompt() {
		this.currentPrompt++;
	}

	// previousPrompt() {
	// 	this.currentPrompt--;
	// }

	answer(currentPrompt: number, option: IOptions) {
		if (currentPrompt === this.promptListLength) {
			this.isGameOver = true;
			// this.stopCounter();
		}
		if (option.correct) {
			this.points += 5;
			this.correctAnswer++;
			setTimeout(() => {
				this.currentPrompt++;
				// this.resetCounter();
				this.getProgressPercentage();
			}, 1000);
		} else {
			setTimeout(() => {
				this.currentPrompt++;
				this.incorrectAnswer++;
				// this.resetCounter();
				this.getProgressPercentage();
			}, 1000);
		}
	}

	getProgressPercentage() {
		this.progress = (this.currentPrompt / this.promptListLength) * 100;
		return this.progress;
	}

	// startCounter() {
	// 	this.interval$ = interval(1000)
	// 		.subscribe(value => {
	// 			this.counter--;
	// 			if (this.counter === 0) {
	// 				this.currentPrompt++;
	// 				this.counter = 60;
	// 			}
	// 		});

	// 	setTimeout(() => {
	// 		this.interval$.unsubscribe();
	// 	}, 600000);
	// }

	// stopCounter() {
	// 	this.interval$.unsubscribe();
	// 	this.counter = 0;
	// }

	// resetCounter() {
	// 	this.stopCounter();
	// 	this.counter = 60;
	// 	this.startCounter();
	// }

	// resetGame() {
	// 	this.resetCounter();
	// 	this.getAllPrompts();
	// 	this.points = 0;
	// 	this.counter = 60;
	//	this.currentPrompt = 0;
	//	this.progress = 0;
	// }
}
