import {Component, OnInit} from '@angular/core';
import {NotifierService} from "angular-notifier";
import {ApiService} from "../../../services/api.service";
import {JwtTokenService} from "../../../services/jwt-token.service";
import {LocalStorageService} from "../../../services/local-storage.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public formData: FormGroup;
    private readonly notifier: NotifierService;
    private title = 'Meu Imovel';

    constructor(
        private api: ApiService,
        private token: JwtTokenService,
        private formBuilder: FormBuilder,
        private session: LocalStorageService,
        private router: Router,
        private notifierService: NotifierService
    ) {
        this.notifier = notifierService;
    }

    ngOnInit() {
        this.buildForm();
    }

    private handleSubmit() {
        if (!this.formData.valid) {
            return;
        }
        this.api.login("conta/login", this.formData.value).subscribe(
            response => {
                this.notifier.notify("success", "Login efetuado com sucesso");
                this.token.token = response.token;
                location.href = '/dashboard';
            },
            error => {
                this.notifier.notify("error", error);
            }
        );
    }

    private buildForm(): void {
        this.formData = this.formBuilder.group({
            email: [null, Validators.required],
            password: [null, Validators.required]
        });
    }
}
