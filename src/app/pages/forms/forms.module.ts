import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

export const FormsRoutes: Routes = [
  {
    path: '',
    data: {
      heading: 'Basic Forms'
    },
    children: [
      {
        path: 'basic',
        loadChildren: './basic-form/basic-form.module#BasicFormModule'
      },
      {
        path: 'form-layout',
        loadChildren: './forms-layout/forms-layout.module#FormsLayoutModule'
      },
      {
        path: 'control',
        loadChildren: './control/control.module#ControlModule'
      },
      {
        path: 'addons',
        loadChildren: './addons/addons.module#AddonsModule'
      },
      {
        path: 'upload',
        loadChildren: './file-upload/file-upload.module#FileUploadModule'
      },
      {
        path: 'picker',
        loadChildren: './picker/picker.module#PickerModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormsRoutes)
  ],
  declarations: []
})
export class FormsModule { }
