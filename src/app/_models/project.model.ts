import { ProjectStatus } from "./status.model"

export class ProjectModel{
    id: number = 0
    title: string = ''
    description: string = ''
    icon: string = ''
    status: ProjectStatus = new ProjectStatus('', '', '')
    url: string = ''
    category: string = ''
}