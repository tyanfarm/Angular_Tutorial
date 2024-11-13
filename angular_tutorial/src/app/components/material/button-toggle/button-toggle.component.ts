import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonToggleComponent {
  selectedFontStyle: string = 'bold';
}
