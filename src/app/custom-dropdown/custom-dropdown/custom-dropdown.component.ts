import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent {
  @Input() options: string[] = [];
  @Input() selectedOption: string = '';
  @Input() placeholder: string = 'Select an option';
  @Output() onSelection: EventEmitter<string> = new EventEmitter<string>();

  isDropdownOpen: boolean = false;
  isArrowUp: boolean = false;
  plcholdr: boolean = false;
 

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isArrowUp = !this.isArrowUp;
    this.plcholdr = !this.plcholdr
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
    this.isArrowUp = false;
    this.plcholdr = false
    this.onSelection.emit(option);
  }

}
