import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {

  // pour le formulaire
  nomDevoir = '';
  dateDeRendu: Date = null;

  constructor(
    private route:Router,
    private assignmentServices : AssignmentService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(
      'Dans submit nom = ' + this.nomDevoir + ' date = ' + this.dateDeRendu
    );
    let newAssignment = new Assignment();
    newAssignment.id = Math.floor(Math.random()*1000);
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;

      this.assignmentServices.addAssignments(newAssignment).subscribe(message => {console.log(message);
        this.route.navigate(["/home"]);

      });
          // et on cache le formulaire et on réaffiche la liste à jour
          //this.formVisible = false;
    // on le rajoute au tableau des assignments
    //this.assignments.push(newAssignment);


    // on va devoir indiquer au "père" qu'on veut qu'il ajoute le newAssignment
    // et comment va-t-on le lui passer ?
  }
}
