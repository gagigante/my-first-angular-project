import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class CoursesService {

  constructor() { }

  getCourses(): string[] {
    return ['JAVA', 'ANGULAR', 'NODE', 'REACT'];
  }
}
