import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermutationCalculatorComponent } from './pages/permutation-calculator/permutation-calculator.component';

const routes: Routes = [
  { path: '', component: PermutationCalculatorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
