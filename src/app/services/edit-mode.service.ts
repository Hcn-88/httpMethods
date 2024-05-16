import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditModeService {

  constructor() {};

  isEditting: boolean = false;

  onEdittingMode(mode: boolean): boolean {
    return this.isEditting = mode;
  };

};