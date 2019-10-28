#### CLI, NgModules, Component, Template syntax, binding
0) CLI structure 
   - `(done)`
   - custom webpack config `(done)`
   - change output html
1) NgModel, Components 
   - interpolation `(done)`
   - safe ?. `(done)`
   - binding `(done)`
   - two way binding -> suffix Change
   - template ref `(done)`
1) SideName component 
   - projection (ng-content)  `(done)`
   - @ViewChild @ContentChild ViewContainerRef for projection +  ngTemplateOutlet ng-container`(done)` 
2) Header component, 
   - style encapsulation @Input(), @Output() for drawer `(done)`
   - @Input(), @Output() for drawer `(done)`
   - Life hooks `(done)`
   - sanitizer
3) Debug
    - Augree
    - /debuggerElement   

#### Directives and pipes
3) NgFor and trackBy and other props `(done)`
3) NgClass `(done)`
3) Special directives 
  - ng-template `(done)`
  - ng-container `(done)`
  - ngTemplateOutlet
4) pure/impure pipe
  - products filter pipe `done`
5) structural directive
   - exchange_rates component + exchange_rates directive `(done)`
6) exportAs
   - hidden directive`(done)`

#### Dependency Injection
4) Service injection 
    - useFactory, useExisting
    - @Optional @Self @Host @SkipSelf  `(done)`
       - @Optional in ng-content + viewProvider
       - @Self in product-card
       - @SkipSelf
       - @Host in ng-content + provider
    - provider vs ViewProvider
4) HttpClient
    - interceptor `(done)`
4) Modal component
    - Modal Service `(done)`
    - componentResolveFactory + ViewContainerRef `(done)`
    - ngComponentOutlet 
    - ng-component ???
4) Path in tsconfig.json `(done)`    

#### Router module
   - guards 
   - static data
   - resolve and params
   - lazy loading

#### Forms module 
   - login / signup template driven form 
   - sync/async validators directives
   - profile edit reactive forms
   - address dynamic form (FormArray)
   - sync/async validators
   - custom FormControl

#### Redux architecture approach
   - store dev tools
   - effects 
   - cart entities 

#### Unit Testing 
   - Testing pipe
   - Testing directives
   - Testing component
   - Testing service
   - coverage

#### e2e Testing
   - from page object to widget


#### ChangeDetection
   

#### Build 
  - custom webpack  (add compression and defer for scripts)
  - ivy renderer 

