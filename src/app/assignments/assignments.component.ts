import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../shared/assignment.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  titre = '';
  ajoutActive = false;
  assignmentSelectionne: Assignment;
  assignments : Assignment[];

  // formulaire visible oui/non ?
  formVisible = false;


  constructor(private assignmentServices : AssignmentService) {}

  ngOnInit(): void {
   this.assignmentServices.getAssignments().subscribe(assignments => this.assignments = assignments)
  }
  assignmentClique(a: Assignment) {
    console.log('Assignment cliqué : ' + a.nom);
    this.assignmentSelectionne = a;
  }

  onAddAssignmentBtnClick() {
    console.log("Affichage du composant d'ajout");
    //this.formVisible = true;
  }

  onNouvelAssignment(event: Assignment) {
this.assignmentServices.addAssignments(event).subscribe(message => console.log(message));
    // et on cache le formulaire et on réaffiche la liste à jour
    //this.formVisible = false;
  }
}
