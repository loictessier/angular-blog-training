import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() post: Post;

    constructor() { }

    ngOnInit() {
    }

    isLoved() {
        return this.post.loveIts > 0;
    }

    isNotLoved() {
        return this.post.loveIts < 0;
    }

    onAddLove() {
        this.post.addLove();
    }

    onSubstractLove() {
        this.post.substractLove();
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

}
