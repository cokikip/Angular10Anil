import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentTextFilter'
})
export class CommentTextFilterPipe implements PipeTransform {

  transform(comments, text: string): any {
    if(text==null||text===""){
      return comments
    }
        return comments.filter(n =>n.body.includes(text))
  }

}
