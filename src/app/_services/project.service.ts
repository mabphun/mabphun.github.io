import { Injectable } from "@angular/core";
import { ProjectModel } from "../_models/project.model";
import { ProjectStatus } from "../_models/status.model";

@Injectable({
    providedIn: 'root'
})
export class ProjectService{

    private _todoStatus: ProjectStatus = { 
        name: 'To Do', 
        color: '#70c961', 
        fontColor: '#ffffff'
    }

    private _wipStatus: ProjectStatus = { 
        name: 'WIP', 
        color: '#4287f5', 
        fontColor: '#ffffff'
    }

    private _doneStatus: ProjectStatus = { 
        name: 'Done', 
        color: '#ac62d1', 
        fontColor: '#ffffff'
    }

    public projects: ProjectModel[] = [
        { 
            id: 1, 
            title: 'Thesis', 
            description: 'This is a longer description of my thesis', 
            icon: 'language',
            status: this._doneStatus
        },
        { 
            id: 2, 
            title: 'Project 2', 
            description: 'This is a longer description of project 2', 
            icon: 'desktop_windows',
            status: this._wipStatus,
        },
        { 
            id: 3, 
            title: 'Project 3', 
            description: 'This is a longer description of project 3', 
            icon: 'desktop_windows',
            status: this._todoStatus,
        },
    ]
}