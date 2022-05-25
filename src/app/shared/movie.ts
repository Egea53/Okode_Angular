import { Injectable } from "@angular/core";
@Injectable({ providedIn: 'root' })
export class Movie {
    id!: number;
    title!: string;
    overview!: string;
    release_date!: string;
    original_language! : string;
    backdrop_path! : string;
 }