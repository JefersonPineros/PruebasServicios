import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrarComponent } from './Componentes/registrar/registrar.component';
import { ActualizarComponent } from './Componentes/actualizar/actualizar.component';
import { HomeComponent } from './Componentes/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BarraComponent } from './Componentes/barra/barra.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './Servicios/item.service';
import { httpInterceptorProviders } from './http-interceptor/index';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    ActualizarComponent,
    HomeComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule,
    DialogModule
  ],
  providers: [ItemService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
