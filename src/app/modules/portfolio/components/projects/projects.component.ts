import { Component, signal } from '@angular/core';
import { IProject } from '../../interface/IProject.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProject[]>([
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
    }
  ])

}
