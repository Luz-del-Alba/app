import {Component, OnInit} from '@angular/core';
import {DashboardService} from "../../services/DashboardService";

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private dashboardService: DashboardService;
  public modulesAvailables: any[] = [];
  public selectedModule: any = undefined;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(dashboardService: DashboardService) {
    this.dashboardService = dashboardService;
  }

  ngOnInit() {
    this.dashboardService.getModulesAvailables().subscribe(modulesAvailables => this.modulesAvailables = modulesAvailables, err => console.log(err));
  }

  select(selectedModule: any) {
    this.selectedModule = selectedModule
  }

}
