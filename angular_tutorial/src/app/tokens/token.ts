import { InjectionToken } from "@angular/core";

export const API_URL = new InjectionToken<string>('API_URL', {
    providedIn: 'root',
    factory: () => 'https://pokeapi.co/api/v2/'   // default value
});
