import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf , CommonModule} from '@angular/common';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [CommonModule , NgIf],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css'
})
export class MyButton {
  @Output() myClick= new EventEmitter<void>();
  @Input() myTypeButton ?: string  ;
  @Input() titleAddButton: string = "اضافه";
  @Input() titleDeleteButton : string = "حذف";
  @Input() colorButton ?: string ;

  ClickButton(){
    
    this.myClick.emit();
  }
}