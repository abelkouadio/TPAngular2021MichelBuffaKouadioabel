import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent implements OnInit {

  assignmentTransmis: Assignment;

  constructor(
    private route: ActivatedRoute,
    private router:Router
     ,private  assignmentServices : AssignmentService,
     private authService:AuthService) {}

  ngOnInit(): void {
      this.getAssignment();
  }



  getAssignment()
  {
    const id = +this.route.snapshot.params.id;
    this.assignmentServices.getAssignment(id).subscribe(assignment =>this.assignmentTransmis = assignment);
  }

  onAssignmentRendu() {

    this.assignmentTransmis.rendu = true;
    this.assignmentServices
    .upateAssignments(this.assignmentTransmis)
    .subscribe(message => console.log(message));

    this.router.navigate(['/home']);

  }

  onDelete()
  {
    this.assignmentServices
    .deleteAssignment(this.assignmentTransmis)
    .subscribe(message => {console.log(message);
      this.assignmentTransmis = null;
      this.router.navigate(['/home']);

    });

  }
  onclickedit(){
    this.router.navigate(['/assignment',this.assignmentTransmis.id,'Edit'], {
      queryParams: { nom: this.assignmentTransmis.nom},
      fragment: 'edition',
    });
  }

  isAdmin():boolean
  {
    return this.authService.loggedIn;
  }
}
