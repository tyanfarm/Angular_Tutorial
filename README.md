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

## Class
- `ng g class models/model_name`

## Service
- `ng g s services/service_name`

## Interface
- `ng g interface models/Ability`

## Carousel Module
- `npm i ngx-owl-carousel-o@16.0.0`
- `Tutorial`: https://www.npmjs.com/package/ngx-owl-carousel-o/v/16.0.0?activeTab=readme
- Must `import { BrowserAnimationsModule } from '@angular/platform-browser/animations';`

## Components
    - `@Input & @Output`: truyen du lieu giua 2 component parent-child
    - `@ViewChild`: truy cap vao phan tu DOM / ChildComponent(su dung duoc tat ca cac func cua child)

## Directives
- `*ngIf`: xuat hien hoac khong
- `ng-container`: dong goi html thanh cac nhom (giong template)
- `ngModel`: two-way binding
- `ngClass`: dieu kien cho css (syntax --> `array_css_class: condition_params`)

## Template-driven Form & Reactive Form
- `Template-driven Form`: dung cac Directives de dieu chinh tren HTML
- `Reactive Form`: cai dat dieu kien ben typescript
- `import { FormsModule, ReactiveFormsModule } from '@angular/forms';`

## Angular Material
### mat-autocomplete
- Component 
- Tinh nang goi y tu dong khi user nhap vao o input.

### mat-badge
- Directive
- Tao cac badge (bieu tuong nho) co the gan vao button, icon hoac phan tu HTML

## Config Translate i18n
- `https://lokalise.com/blog/angular-i18n/`
- `angular.json`: in `projects:name_prj:architect:build:options`
  + add `"localize": true,`

## Website Tools
- https://transform.tools/
