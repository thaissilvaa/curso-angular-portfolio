import { Component, inject, signal } from '@angular/core';
import { IProject } from '../../interface/IProject.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProject[]>(
    [{
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto 1",
      title: "Vida FullStack",
      width: '100px',
      height: '51px',
      description: '<p> Teste <p/>',
      links: [
        {
          name: "Conheça o Blog",
          href: 'https://www.google.com/'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto 1",
      title: "Vida FullStack",
      width: '100px',
      height: '51px',
      description: '<p> Teste <p/>',
      links: [
        {
          name: "Conheça o Blog",
          href: 'https://www.google.com/'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto 1",
      title: "Vida FullStack",
      width: '100px',
      height: '51px',
      description: '<p> Teste <p/>',
      links: [
        {
          name: "Conheça o Blog",
          href: 'https://www.google.com/'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto 1",
      title: "Vida FullStack",
      width: '100px',
      height: '51px',
      description: '<p> Teste <p/>',
      links: [
        {
          name: "Conheça o Blog",
          href: 'https://www.google.com/'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto 1",
      title: "Vida FullStack",
      width: '100px',
      height: '51px',
      description: '<p> Teste <p/>',
      links: [
        {
          name: "Conheça o Blog",
          href: 'https://www.google.com/'
        }
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto 1",
      title: "Vida FullStack",
      width: '100px',
      height: '51px',
      description: '<p> Teste <p/>',
      links: [
        {
          name: "Conheça o Blog",
          href: 'https://www.google.com/'
        }
      ]
    },
  ])

  public openDialog(data: IProject){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
