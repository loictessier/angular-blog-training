import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

    postForm: FormGroup;

    constructor(private postsService: PostsService, private formBuilder: FormBuilder, private router: Router) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.postForm = this.formBuilder.group({
            title: ['', Validators.required],
            content: ['', Validators.required]
        });
    }

    onSavePost() {
        const title = this.postForm.get('title').value;
        const content = this.postForm.get('content').value;
        const newPost = new Post(title, content);
        this.postsService.addNewPost(newPost);
        this.router.navigate(['/posts']);
    }

}
