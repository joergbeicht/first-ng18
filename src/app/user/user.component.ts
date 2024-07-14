import { Component, signal, Input, Output, EventEmitter, computed } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
  // @Input({ required: true }) user!: User;
  // @Input({required: true}) selected!: boolean;
  // @Output() select = new EventEmitter<string>();

  selected = true;
  selectedUser = DUMMY_USERS[randomIndex];
  selectedUserV2 = signal(DUMMY_USERS[randomIndex]);
  imagePathV2 = computed(() => 'assets/users/' + this.selectedUserV2().avatar);

  /**
   * Mit dem get KeyWord kann imagePath wie ein Property genutzt werden!
   * Also so <img [src]="imagePath"
   * Und nicht so <img [src]="imagePath()"
   */
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    console.log('bin da');
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];

    this.selectedUserV2.set(DUMMY_USERS[randomIndex]);

    // this.select.emit(this.user.id);
  }  
}
