import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';
@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  assignments: Assignment[] = [
    {
      id: 1,
      nom: 'TP Angular 1 à rendre !',
      dateDeRendu: new Date('01/02/2021'),
      rendu: true,
    },
    {
      id: 2,
      nom: 'Projet MOPOLO SQL',
      dateDeRendu: new Date('02/15/2021'),
      rendu: false,
    },
    {
      id: 3,
      nom: 'Lange R à finir',
      dateDeRendu: new Date('01/20/2021'),
      rendu: false,
    },
  ];
  constructor(private http:HttpClient,private LoggingService : LoggingService) { }


  url = "https://apiangular2021.herokuapp.com/api/assignments"
  getAssignments(): Observable<Assignment[]>
  {
    console.log('Dans getAssignmens dans le service...');
    //cette partie est sans la connexion a la BD mongo
    //return of (this.assignments);
    return this.http.get<Assignment[]>(this.url);

  }

  getAssignment(id : number): Observable<Assignment>
  {
    console.log('Dans getAssignmens dans le service...');
    //cette partie est sans la connexion a la BD mongo
    //return of (this.assignments.find(a => a.id === id));
    return this.http.get<Assignment>(this.url+"/"+id);

  }

  // tslint:disable-next-line:ban-types
  addAssignments(assignment: Assignment): Observable<any>
  {
   console.log('Dans addAssignments dans le service...');
    //this.assignments.push(assignment);
    //this.LoggingService.log(assignment.nom , "Ajouté")
    //return of ('Assigment ajouté');
    return this.http.post<Assignment>(this.url, assignment);

  }
  // @ts-ignore
  // tslint:disable-next-line:ban-types
  upateAssignments(assignment: Assignment): Observable<any>
  {
    console.log('Dans addAssignments dans le service...');
    // this.assignments.forEach((a, index) => {
    //     if (a === assignment) {
    //       this.assignments[index] = a;

    //     }
    // });
    return this.http.put<Assignment>(this.url, assignment);


  }

  // @ts-ignore
  // tslint:disable-next-line:ban-types
  deleteAssignment(assignment: Assignment): Observable<any> {
    // this.assignments.forEach((a, index) => {
    //   if (a === assignment) {
    //     // suppression d'un élément du tableau
    //     // splice(position, nb elements à supprimer)
    //     this.assignments.splice(index, 1);
    //   }
    // });
    // return of('Assignment supprimé');
    return this.http.delete<Assignment>(this.url +'/' + assignment._id);

  }


}
