import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../../services/DashboardService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from '@angular/common';

@Component({
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  private dashboardService: DashboardService;
  public modulesAvailables: any[] = [];
  public selectedModule: any = undefined;
  formBuilder: FormBuilder

  constructor(private location: Location, dashboardService: DashboardService, formBuilder: FormBuilder) {
    this.dashboardService = dashboardService;
    this.formBuilder = formBuilder;
    this.firstFormGroup = this.formBuilder.group({
      name: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      date: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.selectedModule = this.location.getState();
    this.dashboardService.getModulesAvailables().subscribe(modulesAvailables => this.modulesAvailables = modulesAvailables, err => console.log(err));
  }

  select(selectedModule: any) {
    this.selectedModule = selectedModule
  }

}
