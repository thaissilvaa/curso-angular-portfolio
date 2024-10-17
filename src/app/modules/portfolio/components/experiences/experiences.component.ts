import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperience = signal<IExperience[]>([
    {
      summary: {
        strong: "Analista Engenharia de TI Jr",
        p: "Itaú Unibanco | Abr 2022 - Present",
      },
      text: "<p> Faço sustentação e desenvovimento das automações utilizadas para gerenciamento de ordens de serviço, faturamento e ocorrências das agências fisícas do banco. </p>"
    },
    {
      summary: {
        strong: "Estagiário",
        p: "Itaú Unibanco | Set 2021 - Abr 2022",
      },
      text: "<p> Estagiei na área de sustentação das automações utilizadas para gerenciamento de ordens de serviço, faturamento e ocorrências das agências fisícas do banco. </p>"
    }
  ])

}
