import { Component, OnInit } from "@angular/core";

import { EmployeeService } from "../../shared/employee.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  constructor(public service: EmployeeService) {}

  designations = [
    { id: 1, value: "Trainee" },
    { id: 2, value: "Team leader" },
    { id: 3, value: "CEO" },
  ];

  ngOnInit() {}

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
