import { Component, OnInit } from "@angular/core";
import { NotifierService } from "angular-notifier";
import { ApiService } from "../../../services/api.service";
import { JwtTokenService } from "../../../services/jwt-token.service";
import { LocalStorageService } from "../../../services/local-storage.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public formData: FormGroup;
  private readonly notifier: NotifierService;
  private title = "Meu Imovel";

  constructor(
    private api: ApiService,
    private token: JwtTokenService,
    private formBuilder: FormBuilder,
    private session: LocalStorageService,
    private router: Router,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.buildForm();
  }

  public handleSubmit() {
    if (!this.formData.valid) {
      return;
    }
    this.api.login("conta/login", this.formData.value).subscribe(
      response => {
        this.notifier.notify("success", "Login efetuado com sucesso");
        this.token.token = response.token;
        if (this.token) {
          location.href = "/dashboard";
        }
      },
      data => {
        this.notifier.notify("error", data.error.data.msg);
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
