import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NotifierService } from "angular-notifier";
import { ApiService } from "src/app/services/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  public formData: FormGroup;
  private readonly notifier: NotifierService;
  private title = "Register of real state";

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.buildForm();
  }

  handleSubmit() {
    if (!this.formData.valid) {
      return;
    }

    this.api.post('real-states', this.formData.value).subscribe(
      response => {
        this.notifier.notify("sucess", response.data.msg);
        this.formData.reset();
      },
      data => {
        this.notifier.notify("error", data.error.data.msg);
      }
    );
  }

  private buildForm(): void {
    this.formData = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      content: [null, Validators.required],
      price: [null, Validators.required],
      bathrooms: [null, Validators.required],
      bedrooms: [null, Validators.required],
      propertyArea: [null, Validators.required],
      totalPropertyArea: [null, Validators.required]
    });
  }
}
