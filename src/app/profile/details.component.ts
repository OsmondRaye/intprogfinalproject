import { Component } from '@angular/core';
import { AccountService } from '@app/_services';
import { Role } from '../_models';

@Component({
  templateUrl: 'details.component.html'
})
export class DetailsComponent {
  account = this.accountService.accountValue;

  constructor(private accountService: AccountService) { }

  isAdminLoggedIn(): boolean {
    // Assuming 'this.account.role' is of type 'Role'
    // Replace 'Role' with the actual type of 'this.account.role'
    // and adjust the condition accordingly
    return this.account.role === Role.Admin; // Adjust Role.Admin according to your code
  }
}
