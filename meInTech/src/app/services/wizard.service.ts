import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WizardService {
  [x: string]: any;
  currentStep = 0;
  totalSteps = 0;
}