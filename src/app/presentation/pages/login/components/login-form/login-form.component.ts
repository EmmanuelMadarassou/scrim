import { Component, EventEmitter, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

type Credentials = {
	identifier: string
	password: string
}

@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
	constructor(router: Router) {}
	loginForm = new FormGroup({
		identifier: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
		password: new FormControl('', Validators.compose([Validators.required])),
	})

	@Output() credentials = new EventEmitter<Credentials>()

	onSubmit() {
		const identifier = this.loginForm.get('identifier')?.value as string
		const password = this.loginForm.get('password')?.value as string

		this.credentials.emit({ identifier, password })
	}
}
