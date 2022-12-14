import { HeaderData } from './header-model-data';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
   private _headerData = new BehaviorSubject<HeaderData>({
    title: 'inicio',
    icon: 'home',
    routerUrl: ''
  })

  constructor() { }
  get headerData(): HeaderData{
    return this._headerData.value
  }
  set headerData(headerData: HeaderData){
    this._headerData.next(headerData)
  }
}
