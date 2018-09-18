import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Demo01Component } from '../../src/app/demo01/demo01.component';
import { Demo02Component } from '../../src/app/demo02/demo02.component';
import { ValidateFileComponent } from './validate-file/validate-file.component';
import { RegulationAddComponent } from './demo02/regulation-add/regulation-add.component';
import { RelglationEditComponent } from './demo02/relglation-edit/relglation-edit.component';
import { WorkGroupComponent } from './demo02/work-group/work-group.component';
import { WorkGroupListComponent } from './demo02/work-group/work-group-list/work-group-list.component';
import { WorkGroupAddComponent } from './demo02/work-group/work-group-add/work-group-add.component';
import { WorkGroupManagerComponent } from './demo02/work-group/work-group-manager/work-group-manager.component';
import { WorkGroupEditComponent } from './demo02/work-group/work-group-edit/work-group-edit.component';
import { WorkGroupFormComponent } from './demo02/work-group/work-group-form/work-group-form.component';
import { TrainingPlanFormComponent } from './demo02/training-plan-form/training-plan-form.component';
import { ShortTrainingPlanAddComponent } from './demo02/short-training-plan-add/short-training-plan-add.component';
import { TrainingPalnUnitComponent } from './demo02/training-paln-unit/training-paln-unit.component';
import { CourseShowComponent } from './demo02/course-show/course-show.component';
import { TrainingPlanDetailComponent } from './demo02/training-plan-detail/training-plan-detail.component';
import { TrainingPlanShowComponent } from './demo02/training-plan-show/training-plan-show.component';
import { SysProblemComponent } from './demo02/sys-problem/sys-problem.component';
import { SysProblemDetailComponent } from './demo02/sys-problem-detail/sys-problem-detail.component';
import { KnowledgeComponent } from './demo02/knowledge/knowledge.component';
import { KnowledgeListComponent } from './demo02/knowledge-list/knowledge-list.component';
import { ProblemListComponent } from './demo02/problem-list/problem-list.component';
import { SysProblemAddComponent } from './demo02/sys-problem-add/sys-problem-add.component';
import { SysProblemEditComponent } from './demo02/sys-problem-edit/sys-problem-edit.component';
import { SysProblemFormComponent } from './demo02/sys-problem-form/sys-problem-form.component';
import { SysOptionComponent } from './demo02/sys-option/sys-option.component';
import { SysOpinionComponent } from './demo02/sys-opinion/sys-opinion.component';
import { LecturerBannerBoxComponent } from './demo02/src/app/demo02/lecturer-banner-box/lecturer-banner-box.component';
import { LecturerApplyComponent } from './demo02/src/app/demo02/lecturer-apply/lecturer-apply.component';
@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    Demo02Component,
    ValidateFileComponent,
    RegulationAddComponent,
    RelglationEditComponent,
    WorkGroupComponent,
    WorkGroupListComponent,
    WorkGroupAddComponent,
    WorkGroupManagerComponent,
    WorkGroupEditComponent,
    WorkGroupFormComponent,
    TrainingPlanFormComponent,
    ShortTrainingPlanAddComponent,
    TrainingPalnUnitComponent,
    CourseShowComponent,
    TrainingPlanDetailComponent,
    TrainingPlanShowComponent,
    SysProblemComponent,
    SysProblemDetailComponent,
    KnowledgeComponent,
    KnowledgeListComponent,
    ProblemListComponent,
    SysProblemAddComponent,
    SysProblemEditComponent,
    SysProblemFormComponent,
    SysOptionComponent,
    SysOpinionComponent,
    LecturerBannerBoxComponent,
    LecturerApplyComponent,

  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
