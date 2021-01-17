import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'; 
import {CustomValidator} from '../custom-validator';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  //dog.html 3라인 "form" 만들기
  form = new FormGroup({            //안의 내용이 비면 안된다.   0부터9까지의 숫자 2자리로 검사하고 입력횟수가 됨
    requried_1: new FormControl('', Validators.required),
    //↑ 컨트롤이름
    eq5_1:new FormControl('',CustomValidator.eq5),
                                  //안의 내용이 비면 안된다.   A부터Z까지의 3자리로 유효성 검사하고 입력횟수가 됨
    upperCase_2 : new FormControl('', [Validators.required, Validators.pattern("[A-Z]{3}")])
    

  });
  dog={
    name:'',
    age:'',
    species:'진돗개'
  }; 
  onSubmit(){ 
    console.log(this.form); 
    console.log(this.form.controls.upperCase_2.value);
    console.log(this.form.controls.requried_1.value);
    console.log(this.form.valid); 
    console.log(this.form.controls);
    this.dog.name=this.form.controls.upperCase_2.value;
    this.dog.age=this.form.controls.requried_1.value;
  }

  constructor() { } 
 
  ngOnInit(): void {
  }
  
} 