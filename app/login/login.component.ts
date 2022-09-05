import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id: [''],
      username: [''],
      password: [''],
      role: ['']
    })

  }
  logIn() {
    this.http.get<any>("http://localhost:3000/user").subscribe(res => {
      const user = res.find((a: any) => {
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
      })
      if (user) {
        sessionStorage.setItem("userid", user.id);
        sessionStorage.setItem("role", user.role);
        alert("login is successfull");
        console.log(user)
        this.loginForm.reset();
        this.router.navigate(['todo'])

      } else {
        alert("server issue ")
      }

    }
    )

  }

}
