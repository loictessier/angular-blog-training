import { Component } from '@angular/core';
import { Post } from './models/post';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    postList = [
        new Post('Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique aliquet mollis. Quis'),
        new Post('Mon deuxième post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique aliquet mollis. Quis'),
        new Post('Encore un post', 'Nullam sollicitudin ex non sapien maximus, at consectetur est sagittis. Fusce porta euismod \
        vestibulum. Pellentesque non imperdiet enim, non semper mauris. Duis dictum mauris ac sapien auctor pretium. Donec auctor \
        facilisis ligula. Cras est purus, maximus vestibulum tortor non, egestas dictum neque.')
    ];
}
