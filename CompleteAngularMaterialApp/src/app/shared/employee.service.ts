import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  constructor() {}

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    Employee_id: new FormControl(""),
    name: new FormControl(""),
    project_name: new FormControl(""),
    gender: new FormControl("1"),
    designation: new FormControl(0),
    dob: new FormControl(""),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      Employee_id: "",
      name: "",
      project_name: "",
      gender: "1",
      designation: 0,
      dob: "",
    });
  }
}
