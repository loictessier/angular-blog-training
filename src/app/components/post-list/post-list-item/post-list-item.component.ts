import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() index: number;
    post: Post;

    constructor(private postsService: PostsService) { }

    ngOnInit() {
        this.post = this.postsService.posts[this.index];
    }

    isLoved() {
        return this.postsService.getLovePost(this.index) > 0;
    }

    isNotLoved() {
        return this.postsService.getLovePost(this.index) < 0;
    }

    onAddLove() {
        this.postsService.addLovePost(this.index);
    }

    onSubstractLove() {
        this.postsService.substractLovePost(this.index);
    }

    getColor() {
        if (this.isLoved()) {
            return 'green';
        } else if (this.isNotLoved()) {
            return 'red';
        } else {
            return 'black';
        }
    }

    onDeletePost() {
        this.postsService.deletePost(this.index);
    }
}
