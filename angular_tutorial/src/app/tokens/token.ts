import { InjectionToken } from "@angular/core";

export const API_URL = new InjectionToken<string>('API_URL', {
    providedIn: 'root',
    factory: () => 'http://localhost:5102/api/v1'   // default value
});
