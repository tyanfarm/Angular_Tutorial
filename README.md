## Init Project
- `npm i -g @angular/cli@16.1.0`
- `ng version`
- `ng new project_name`
- `ng serve -o`

## Install Tailwind CSS
- https://tailwindcss.com/docs/guides/angular

## Create Component
- `ng g c components/component_name` (default)
- `ng g c components/component_name --skip-tests=true --inline-style` (Do not have css & spec.ts file)

## Carousel Module
- `npm i ngx-owl-carousel-o@16.0.0`
- `Tutorial`: https://www.npmjs.com/package/ngx-owl-carousel-o/v/16.0.0?activeTab=readme
- Must `import { BrowserAnimationsModule } from '@angular/platform-browser/animations';`