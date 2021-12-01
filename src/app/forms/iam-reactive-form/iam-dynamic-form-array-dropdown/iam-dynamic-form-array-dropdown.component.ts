import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-iam-dynamic-form-array-dropdown',
  templateUrl: './iam-dynamic-form-array-dropdown.component.html',
  styleUrls: ['./iam-dynamic-form-array-dropdown.component.scss']
})
export class IamDynamicFormArrayDropdownComponent implements OnInit {

  public deployLabel: FormArray;
  constructor() { }

  ngOnInit(): void {
    this.deployLabel = new FormArray([new FormGroup({
      labelName: new FormControl('labelName'),
      labelUrl: new FormControl('labelUrl'),
      versions: new FormControl('versions')
    })
    ]);


   
  }
}


