import { Injectable } from "@angular/core";
import { ProjectModel } from "../_models/project.model";
import { ProjectStatus } from "../_models/status.model";

@Injectable({
    providedIn: 'root'
})
export class ProjectService{

    private statuses = {
        todo: new ProjectStatus('To Do', '#70c961', '#ffffff'),
        wip: new ProjectStatus('WIP', '#4287f5', '#ffffff'),
        done: new ProjectStatus('Done', '#ac62d1', '#ffffff')
    }

    private categories = {
        
    }

    // private _todoStatus: ProjectStatus = { 
    //     name: 'To Do', 
    //     color: '#70c961', 
    //     fontColor: '#ffffff'
    // }

    // private _wipStatus: ProjectStatus = { 
    //     name: 'WIP', 
    //     color: '#4287f5', 
    //     fontColor: '#ffffff'
    // }

    // private _doneStatus: ProjectStatus = { 
    //     name: 'Done', 
    //     color: '#ac62d1', 
    //     fontColor: '#ffffff'
    // }

    public projects: ProjectModel[] = [
        { 
            id: 1, 
            title: 'Szakdolgozat|Thesis', 
            description: 'YouDo: Teendő és időmenedzsment alkalmazás Angular-ban|YouDo: To do and time management application in Angular', 
            icon: 'playlist_add_check',
            status: this.statuses.done,
            url: 'https://github.com/mabphun/ProjectReference-YouDo',
            category: ''
        },
        { 
            id: 2, 
            title: 'OETube|OETube', 
            description: 'Videómegosztó alkalmazás, felhasználók és csoportok számára|Video sharing application for users and groups', 
            icon: 'play_circle_outline',
            status: this.statuses.done,
            url: 'https://github.com/mabphun/ProjectReference-OETube',
            category: ''
        },
        { 
            id: 3,
            title: 'Szótanuló alkalmazás|Learning App', 
            description: 'Szavak, kifejezések, ábrák megtanulása kártyákkal és tesztekkel|Learning words, phrases, diagrams with cards and tests', 
            icon: 'school',
            status: this.statuses.done,
            url: 'https://github.com/mabphun/ProjectReference-LearningApp',
            category: ''
        },
    ]
}