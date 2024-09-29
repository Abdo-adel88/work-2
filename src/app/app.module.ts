import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { StyleClassModule } from 'primeng/styleclass';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxEchartsModule } from 'ngx-echarts';
import { EditorModule } from 'primeng/editor';
import { TableModule } from 'primeng/table';
import { SortComponent } from './components/sort/sort.component';
import { FilterComponent } from './components/filter/filter.component';
import { TagModule } from 'primeng/tag';
import { PagenationComponent } from './components/pagenation/pagenation.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { StyleComponent } from './components/style/style.component';
import { TempletComponent } from './components/templet/templet.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { SkeletonModule } from 'primeng/skeleton';
import { PaginatorModule } from 'primeng/paginator';



// Factory function for loading translation files
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SortComponent,
    FilterComponent,
    PagenationComponent,
    ResponsiveComponent,
    StyleComponent,
    TempletComponent,
    RadiobuttonComponent,
    SkeletonComponent,
    
  ],
  imports: [
    PaginatorModule,
    SkeletonModule,
    HttpClientModule,
    TagModule,
    TableModule,
    EditorModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    InputSwitchModule,
    CheckboxModule,
    DropdownModule,
    DialogModule,
    StyleClassModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
