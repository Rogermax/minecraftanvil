import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermutationCalculatorComponent } from './pages/permutation-calculator/permutation-calculator.component';
import { SelectionComponent } from './pages/selection/selection.component';

const routes: Routes = [
  { path: '', component: SelectionComponent },
  { path: ':id', component: PermutationCalculatorComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
