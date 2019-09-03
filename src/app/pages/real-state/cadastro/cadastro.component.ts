import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NotifierService } from "angular-notifier";
import { ApiService } from "src/app/services/api.service";
import { Router } from "@angular/router";
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  public formData: FormGroup;
  private readonly notifier: NotifierService;
  private userId: any = '';
  private key = 'user';
  private titulo = "Register of real state";
  private load = false;

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    notifierService: NotifierService,
    private session: LocalStorageService,
  ) {
    this.notifier = notifierService;
    this.userId = this.session.getObject(this.key);
  }

  ngOnInit() {
    this.buildForm();
  }

  handleSubmit() {
    if (!this.formData.valid) {
      return;
    }

    this.load = true
    this.formData.value.user_id = this.userId.id
    this.formData.value.slug = 'apartamento_'+Math.random()
    this.api.post('real-states', this.formData.value).subscribe(
      response => {
        this.load = false
        console.log(response.data.msg);
        this.notifier.notify("success", response.data.msg);

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
      cotent: [null, Validators.required],
      price: [null, Validators.required],
      bathrooms: [null, Validators.required],
      bedrooms: [null, Validators.required],
      property_area: [null, Validators.required],
      total_property_area: [null, Validators.required],
    });
  }
}
