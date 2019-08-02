import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor() {
        this.posts = [
            new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique aliquet mollis.'),
            new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique aliquet mollis.'),
            new Post('Encore un post', 'Nullam sollicitudin ex non sapien maximus, at consectetur est sagittis. Fusce porta euismod \
            vestibulum. Pellentesque non imperdiet enim, non semper mauris. Duis dictum mauris ac sapien auctor pretium. Donec auctor \
            facilisis ligula. Cras est purus, maximus vestibulum tortor non, egestas dictum neque.')
        ];
        this.emitPosts();
    }

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    addNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.emitPosts();
    }

    deletePost(indexPost: number) {
        this.posts.splice(indexPost, 1);
        this.emitPosts();
    }

    addLovePost(indexPost: number) {
        this.posts[indexPost].addLove();
        this.emitPosts();
    }

    substractLovePost(indexPost: number) {
        this.posts[indexPost].substractLove();
        this.emitPosts();
    }

    getLovePost(indexPost: number): number {
        return this.posts[indexPost].loveIts;
    }

}
