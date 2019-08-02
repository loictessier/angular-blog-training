import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

    posts: Post[];
    postsSubscription: Subscription;

    constructor(private postsService: PostsService) { }

    ngOnInit() {
        this.postsSubscription = this.postsService.postsSubject.subscribe(
            (posts: Post[]) => {
                this.posts = posts;
            }
        );
        this.postsService.emitPosts();
    }

    ngOnDestroy(): void {
        this.postsSubscription.unsubscribe();
    }

}
