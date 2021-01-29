import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from '../assignments/assignment.model';
import { AssignmentService } from '../shared/assignment.service';

@Component({
  selector: 'app-edit-assigment',
  templateUrl: './edit-assigment.component.html',
  styleUrls: ['./edit-assigment.component.css']
})
export class EditAssigmentComponent implements OnInit {

  assignment: Assignment;
  nomAssignment:string;
  dateDeRendu:Date;

  constructor(private assignmentsService: AssignmentService,
              private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    // on récupère l'id dans le snapshot passé par le routeur
    // le "+" force l'id de type string en "number"
    const id = +this.route.snapshot.params.id;
    this.assignmentsService.getAssignment(id)
      .subscribe(assignment => this.assignment = assignment);
  }
  onSaveAssignment() {
    if(this.nomAssignment) {
      this.assignment.nom = this.nomAssignment;
    };

    if(this.dateDeRendu) {
      this.assignment.dateDeRendu = this.dateDeRendu;
    }
    this.assignmentsService.upateAssignments(this.assignment)
      .subscribe(message => {console.log(message);    this.router.navigate(["/home"]);
    });

    // navigation vers la home page
  }

}
