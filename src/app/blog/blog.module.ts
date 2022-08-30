import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryListComponent } from './entry-list/entry-list.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    EntryListComponent,
    PostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
