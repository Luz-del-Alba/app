import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from '@angular/common';
import {EvaluationService} from "../../services/EvaluationService";
import {first} from "rxjs/operators";
import {PolicyService} from "../../services/PolicyService";

@Component({
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  public personalFormGroup: FormGroup;
  public generalFormGroup: FormGroup;
  private evaluationService: EvaluationService;
  private policyService: PolicyService;
  public selectedModule: any = undefined;
  public formBuilder: FormBuilder
  public evaluation: any;

  constructor(private location: Location, evaluationService: EvaluationService, formBuilder: FormBuilder, policyService: PolicyService) {
    this.evaluationService = evaluationService;
    this.policyService = policyService;

    this.formBuilder = formBuilder;
    this.personalFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.generalFormGroup = this.formBuilder.group({
      date: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.selectedModule = this.location.getState();
  }

  select(selectedModule: any) {
    this.selectedModule = selectedModule
  }

  verify() {
    const personalForm = this.personalFormGroup.value;
    const generalForm = this.generalFormGroup.value;
    console.log(personalForm);
    console.log(generalForm);
    this.evaluationService.calculate().pipe(first()).subscribe(evaluation => {
      this.evaluation = evaluation;
    });
  }

  buy() {
    const personalForm = this.personalFormGroup.value;
    this.policyService.buy(personalForm.name, personalForm.email).pipe(first()).subscribe(evaluation => {
      this.evaluation = evaluation;
    });
  }
}
