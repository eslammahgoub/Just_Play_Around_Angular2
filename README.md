# Angular 2 Material Datepicker

datepicker library for Angular 2

### Prerequisites
required angular 2 material

### Installation
```
npm i
```

### Usage
Import the Datepicker Module and add it to the `imports` of your module

```
import { DatepickerModule } from 'angular2-material-datepicker'

@NgModule({
  imports: [ DatepickerModule ],
  declarations: [ ... ],
  bootstrap: [ ... ]
})
export class YourModule { }
```
If you already have a module of the same name, you can create an alias
```
import { DatepickerModule as YourAlias } from 'angular2-material-datepicker'
```
Call the component from within a template
```
<material-datepicker [(date)]="yourModelDate"></material-datepicker>
```
and you're set!

### API


### CSS

### Animation

### Todo
- Possibly make the ranges impact selection on a more granular level by preventing days, not just months, from being selected.
- Add Selector for months and Years.

### License
MIT
