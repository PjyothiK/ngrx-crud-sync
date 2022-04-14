import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
postForm:FormGroup;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {

    this.postForm=new FormGroup({
      title:new FormControl('',[
        Validators.required,
        Validators.minLength(6),
      ]),
      description:new FormControl('',[
          Validators.required,
          Validators.minLength(10),
        ]),
    })
  }
  onAddPost(){
   if(!this.postForm.valid){
      return;
   }
   const post:Post={
title:this.postForm.value.title,
description:this.postForm.value.description,

   };
   this.store.dispatch(addPost({post}))
  }

}
