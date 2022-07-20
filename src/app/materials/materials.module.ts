import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
  ],
})
export class MaterialsModule {}
