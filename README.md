## Angular 4 project - Use ng-content and ng-packagr to package custom module libraries for external applications


#Goal

The goal for this project is to develop custom module libraries with app containers that other developers can leverage on for their project. Project content can easily be added to the template element of an imported module thereby eliminating the need for much code and promote UI consistency. The other interesting part is that we can export a packaged version of these  module library in such a way that lets anyone install it as a node mode either through npm or through a url reference to its .tgz file.


#How-to

- Creat the modules
- Create export metadata in its own NgModule
- Test them in browser by Importing the modules into their parent app.module
-  If Test passes, then do the following:

- npm install ng-packagr --save-dev in lib root(eg in promos dir)
- Create file public_api.ts. Add references to export modules in promos dir
- create ng-package.json. Make ref to ng-package.schema.json. Make reference to public_api.ts
- Add packagr script to scripts object in package.json. Change Private to false
- Add library path to tsconfig.app.json

- Create dist folder in root dir(e.g promos) by running npm run packagr
- Pack dist content into a dist/file-name.0.0.0.tgz by running npm pack in dist dir. This is the version to be imported into other external applications.
- Install the tgz into external app dir root. Run npm install file-relative-path/dist/file.tgz
- Go to the external app and reference the module you want both from the app.module and app.component, same as import { Component } from '@angiular/core'
- Add the template element for the exported module to the external app's template
- Run ng serve in external app directory to preview your changes

- Important takeaway:
- Makesure to use styleUrls in @Component annotation to pull all css resources that will be required by the Module. This like bootstrap.min.css need not be included in such annotation if it will be downloaded into the external applications.
© 2017 GitHub, Inc.
