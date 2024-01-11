import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { LoginFormComponent } from './components/login-form'
import { LoginComponent } from './login.component'

@NgModule({
	declarations: [LoginComponent, LoginFormComponent],
	imports: [FormsModule, ReactiveFormsModule, RouterModule],
	providers: [],
	exports: [LoginComponent],
})
export class LoginModule {}
