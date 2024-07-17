import { Injectable, OnInit } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LanguageService{
    

    private defaultLanguage: string = 'hu'
    private lang : string|null = null
    
    constructor(){
        this.lang = localStorage.getItem('lang')
    }

    public getLanguage() : string {
        //console.log(this.lang !== null ? this.lang : this.defaultLanguage);
        return this.lang !== null ? this.lang : this.defaultLanguage
    }

    public setLanguage(){
        this.lang = this.lang === 'hu' ? 'en' : 'hu'
        localStorage.setItem('lang', this.lang)
    }

    public setLanguageByString(language: string){
        this.lang = language
        localStorage.setItem('lang', this.lang)
    }

    public getIndex(): number{
        let temp = this.getLanguage()
        return temp === 'hu' ? 0 : 1
    }

    public getText(collection: string) : string{
        return collection.split('|')[this.getIndex()]
    }

}