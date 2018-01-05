## Planning

1. Configuration/dependencies
| Name                | Included at              | Description                                                                                                                                                     |
|---------------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| npm                 | project root             | creates manifest file, storing necessary 3rd party packages.                                                                                                    |
| gulp                | project root             | optimizes code & pkgs code into browser-ready format. Creates node_modules folder & is in charge of using other npm pkgs.                                       |
| browserify          | gulp                     | translates 'require' & 'exports' keywords - when called it bundles front end scripts (which are linked to back end) and creates app.js file in build/js folder. |
| vinyl-source-stream | gulp                     | assists in bringing files into pipeline structure                                                                                                               |
| gulp-concat         | gulp                     | Consolidates multiple JS files into one, decreasing load-time. Pushing all JS into app.js file. It is a dependency of jsBrowserify.                             |
| minify              | gulp                     | optimizes scripts by removing unnecessary characters. jsBrowserify (and thus concat) become dependencies of minify.                                             |
| gulp build          | build task               | specifies top level task (minify scripts or jsBrowserify), as each has its own dependency chain. It won't minify scripts unless we call gulp build --production |
| gulp util           | enviroment variables mgr | allows for telling our build task whether we are in dev or production build.                                                                                    |
| gulp del            | clean task               | takes array of paths, ie build & tmp folders, deletes them. It becomes dependency of gulp build, thus creating new fresh files whenever gulp build is called.   |
| npm moment            | backend js               | allows for parsing, validating, formatting, manipulating and comparing dates   |

2. Specs
  * Spec 1: Description, input, output.
  * Spec 2: Description, input, output.

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for ...
  * Template/html page for ...
  * Template/html page for ... (one for each route/integrated user story)
  * Display...
  * Integrate feature that...

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome
