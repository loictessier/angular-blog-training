import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { PostListComponent } from 'src/app/components/post-list/post-list.component';
import { NewPostComponent } from 'src/app/components/post-list/new-post/new-post.component';

const routes: Routes = [
    { path: 'posts', component: PostListComponent },
    { path: 'new', component: NewPostComponent },
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: '*', redirectTo: 'posts' }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
