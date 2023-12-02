// wizard.component.ts
import { Component, OnInit } from '@angular/core';
import { WizardService } from '../services/wizard.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  currentStep!: number;
  
  constructor(private wizardService: WizardService) {}

  ngOnInit() {
    this.currentStep = this.wizardService.currentStep;
  }

  get totalSteps() {
    return this.wizardService.totalSteps;
  }

  get wizardSteps() {
    return this.wizardService['steps'];
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.wizardService.currentStep = this.currentStep;
    }
  }

  nextStep() {
    if (this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
      this.wizardService.currentStep = this.currentStep;
    }
  }
}
