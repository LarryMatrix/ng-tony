import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  MatButtonModule,
  MatRadioModule,
  MatNativeDateModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatMenuModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatTableModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatSortModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatStepperModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatChipsModule,
  MatTabsModule,
  MatRippleModule,
} from '@angular/material';
import { TextFieldModule } from '@angular/cdk/text-field';

const materialComponents = [
  MatButtonToggleModule,
  DragDropModule,
  MatTabsModule,
  MatRadioModule,
  MatChipsModule,
  CommonModule,
  MatBottomSheetModule,
  MatNativeDateModule,
  MatGridListModule,
  MatMenuModule,
  MatCheckboxModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatTableModule,
  MatProgressBarModule,
  MatTooltipModule,
  FormsModule,
  MatPaginatorModule,
  MatSortModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  ReactiveFormsModule,
  MatIconModule,
  MatSliderModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatStepperModule,
  MatSnackBarModule,
  MatBadgeModule,
  MatRippleModule,
  TextFieldModule,
];

@NgModule({
  declarations: [],
  imports: [
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialComponentsModule { }
