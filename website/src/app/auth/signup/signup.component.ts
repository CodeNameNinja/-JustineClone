import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy{
  isLoading = false;
  private authStatusSub: Subscription;
  constructor(
    public authService: AuthService
    ) {}

    ngOnInit(){
      this.authStatusSub = this.authService.getAuthStatusListener().subscribe((authStatus) => {
        this.isLoading = false;
      })
    }

  onSignup(form: NgForm) {
    console.log(form)
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(form.value.firstName,form.value.lastName, form.value.email, form.value.password);

  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }
}
