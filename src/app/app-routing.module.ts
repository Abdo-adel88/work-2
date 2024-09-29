import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SortComponent } from './components/sort/sort.component';
import { PagenationComponent } from './components/pagenation/pagenation.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { StyleComponent } from './components/style/style.component';
import { TempletComponent } from './components/templet/templet.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { FilterComponent } from './components/filter/filter.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'sort',component:SortComponent
  },
  {
    path:'filter',component:FilterComponent
  },
  {
    path:'pagenation',component:PagenationComponent
  },
  {
    path:'responsive',component:ResponsiveComponent
  },
  {
    path:'style',component:StyleComponent
  },
  {
    path:'template',component:TempletComponent
  },
  {
    path:'radiobutton',component:RadiobuttonComponent
  },
  {
    path:'Skeleton',component:SkeletonComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
