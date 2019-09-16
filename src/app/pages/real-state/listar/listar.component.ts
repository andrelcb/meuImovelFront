import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public realStates: any;
  private load = false;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getRealStates();
  }

  getRealStates(){
    this.load = true;
    this.api.get('real-states').subscribe(
      response=>{
        this.load = false;

        this.realStates = response.data;

        console.log(this.realStates);
      },
     data => {
      console.log(data.error.msg);
    }
  );
}

}
