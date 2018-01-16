import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  coursesObservable: Observable<any[]>

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.coursesObservable = this.getCourses('/jokes')
  }

  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges()
  }
}
