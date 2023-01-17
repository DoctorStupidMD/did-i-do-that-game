import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromptComponent } from './prompt/prompt.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
	{ path: "", redirectTo: "welcome", pathMatch: "full" },
	{ path: "welcome", component: WelcomeComponent },
	{ path: "prompt", component: PromptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
