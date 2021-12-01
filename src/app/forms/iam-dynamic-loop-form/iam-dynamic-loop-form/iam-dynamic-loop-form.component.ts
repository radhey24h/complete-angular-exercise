import { Component, OnInit } from '@angular/core';
import { concatMap, delay } from 'rxjs/operators';
import { range, of } from 'rxjs';

@Component({
  selector: 'app-iam-dynamic-loop-form',
  templateUrl: './iam-dynamic-loop-form.component.html',
  styleUrls: ['./iam-dynamic-loop-form.component.scss']
})
export class IamDynamicLoopFormComponent implements OnInit {

  public labelVersions: LabelVersions[];
  public progressWidth: number;
  public processText: string;

  constructor() {
  }
  public ngOnInit(): void {
    this.labelVersions = this.getlabelVersions();
  }

  public getlabelVersions(count = 5): LabelVersions[] {
    return Array.from({ length: count }, (_, i) => {
      return {
        id: '213123213' + i,
        labelName: 'label' + (i + 1),
        labelURL: 'lebel.finapps.ihsmarkit.com ' + i,
        labelVersionCode: '_' + (i - 1),
        versions: this.getBuildNumuber(),
        isRequired: true,
        inProgress: false,
        deployedDate: '2021 sep 05 @ 09:11:37'
      };
    });
  }

  public getBuildNumuber(count = 15): Versions[] {
    return Array.from({ length: count }, (_, i) => {
      return {
        code: '_' + i,
        name: '432 ' + i
      };
    });
  }

  public onCustomViewSelectionChanged(value: any, idx: number): void {
    console.log(value);
    let labelVersion = this.labelVersions[idx];
    labelVersion.labelVersionCode = value;
    console.log(labelVersion);
    this.completeProcessBar(labelVersion);
  }

  public completeProcessBar(labelVersion: LabelVersions) {
    labelVersion.inProgress = true;
    this.progressWidth = 0;
    range(1, 100).pipe(concatMap(i => of(i).pipe(delay(100 + (Math.random() * 300))))).subscribe(val => {
      this.progressWidth = val;
      this.processText = 'Activating ';
    }).add(() => {
      labelVersion.inProgress = false;
    });
  }
}

export class LabelVersions {
  public id: string;
  public labelName: string;
  public labelURL: string;
  public labelVersionCode: string;
  public versions: Versions[];
  public inProgress: boolean;
  public deployedDate: string;
  public isRequired: true;
}

export class Versions {
  public code: string;
  public name: string;
}
