import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Hoteles Colsubsidio',
      desc: 'Colsubsidio hotel reservation portal, end-to-end development. For this project, services were centralized in Apigee as a central request point, microservices were also created as a second layer to add business logic that was consumed through the Angular-powered front-end.',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 9, Azure, Mysql, Spring Boot, Apigee'
    },
    {
      id: 1,
      title: 'Piscilago Colsubsidio',
      desc: 'Piscilago Colsubsidio end-to-end development, a ticket purchasing system for a water park, For this project, services were centralized in Apigee as a central request point, microservices were also created as a second layer to add business logic which was consumed through the front-end powered by Angular.',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z3.png',
      tech: 'Angular 9, Azure, Mysql, Spring Boot, Apigee'
    },
    {
      id: 1,
      title: 'SAT Integration',
      desc: 'Integration of the SIIGO electronic invoicing system with the Mexican Tax Administration Service Entity (SAT)',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z2.png',
      tech: '.NET, docker, kubernetes, azure'
    },
    
  ]
  about2 = `Full Stack Software Developer with 5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 6+ All versions,Javascript.
  also tecnologies in backend such as Java, C#, SQL, MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/1FeTybsiJLqFPcVPbVykeP7ybjA4O2EL6/view?usp=share_link"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 4+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': '.NET',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'Spring Boot (JAVA)',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONGO, FIREBASE',
      'progress': '80%'
    },
    {
      'id': '5',
      'skill': 'Azure',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'DevOps',
      'progress': '75%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2023 - Currently',
      'institution': 'Albright',
      'city':'Sydney, Australia',
      'education': 'Certificate III in Business',
      'stream': 'Vocational Education and Training (VET)',
      'info': ``
    },
    {
      'id': '1',
      'from_to_year': '2022 - 2023',
      'institution': 'Lexis Sydney',
      'city':'Sydney, Australia',
      'education': 'General English Course',
      'stream': 'English Lenguage',
      'info': ``
    },
    {
      'id': '1',
      'from_to_year': '2019 - 2022',
      'institution': 'ECCI University (Escuela Colombiana de Carreras Industriales)',
      'city':'Bototá, Colombia',
      'education': 'System Engineer',
      'stream': 'Degree',
      'info': ``
    },
    {
      'id': '1',
      'from_to_year': '2016 - 2018',
      'institution': 'SENA (Servicio Nacional de Aprendizaje)',
      'city':'Bototá, Colombia',
      'education': 'System EngineerAnalysis and development of information systems',
      'stream': 'technologist',
      'info': ``
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'SIIGO',
      location: 'Bogotá Colombia',
      timeline: '23/11/2021 - 17/11/2022',
      role: 'FULL STACK SSR',
      work: `Techonologies: \n.NET, Azure Cloud, DevOps, Docker, Kubernetes, Angular, kafka (Event-driven programming), Service Bus y Azure Storage. 
      Specific job-related skills and knowledge: Software Architecture, Agile Methodology with Scrum, Development and integration of APIs, Programming driven by events. 
      Specific responsibilities and job-related accomplishments: I was a fundamental part of the Integration with SAT and maintenance of the integration, among other activities associated with his role`

    },
    {
      id: 3,
      company: 'BITS AMERICAS',
      location: 'Bogotá Colombia',
      timeline: '02/10/2018 - 16/10/2021',
      role: 'DESARROLLADOR SENIOR I',
      work: `Techonologies: Java, Sprint Boot, Yii2(Php), Azure Cloud, DevOps, Docker, Angular, SQL, NoSQL, Service Bus y Azure Storage. 
      Specific job-related skills and knowledge: Software Architecture, Agile Methodology with Scrum, Development and integration of APIs, Management and leadership of development teams, Backend Development, Frontend Development, UX.
      Specific responsibilities and job-related accomplishments: I was a fundamental part of the projects that I was in charge of, such as Colsubsidio Hotels, Colsubsidio Events, in addition to those that I was part of, such as Portal Personas, Portal Empresas and Piscilago`
    },
    {
      id: 2,
      company: 'ITEHL',
      location: 'Bogotá Colombia',
      timeline: '12/06/2018 - 11/09/2018',
      role: 'Desarrollador .NET',
      work: `Technologies : .NET, Angular, Sql Server, DevOps.
      Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
      Specific job-related skills and knowledge: Agile Methodology with Scrum, Development and integration of APIs, MicroServices.
      Specific responsibilities and job-related accomplishments: I was a fundamental part of the development and execution of the Pemarsa project, a project of which I was part`
    },

    {
      id: 1,
      company: 'SINCOSOFT',
      location: 'Bogotá Colombia',
      timeline: '24/02/2017 - 11/04/2018',
      role: 'AUXILIAR DE DESARROLLO',
      work: `Technologies : ASP .net, DevOps, Angular, Ionic, Sql Server.
      Specific job-related skills and knowledge: Application Support and Agile Methodology with Scrum.
      Specific responsibilities and job-related accomplishments: Application support, helpdesk resolution and application bugs that may arise`
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/cris-hub.png',
      url: 'https://github.com/cris-hub'
    }
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
