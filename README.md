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
| npm lifeExpectancy            | backend js               | allows taking input values (dob, gender, country); returns life expectancy value  |

2. Specs
  * Spec 1: It takes an input age (in years) and coverts it into seconds
    * Example Input: 30 years
    * Example Output: 946707780 seconds
  * Spec 2: It compares input birthdate (month/day) and calculates the difference (in seconds) between that date and current date.
    * Example Input: March 10
    * Example Output: 26,092,800 seconds
  * Spec 3: It adds the seconds between birthdate and current date to Spec 1 output (in seconds) to create age in years.
    * Example Input: Age in years = 30; Birthdate = March 10
    * Example Output: 972,800,580 seconds
  * Spec 4: It manipulates age data to calculate age in years on 4 different planets: Mercury, Venus, Mars, Jupiter.
    * Example Input: Age in years = 35;
    * Example Output:
  * Spec 5: It pulls life expectancy value from lifeexpectancy npm object based on input variable.
    * Example Input: Country: 'India', gender: male
    * Example Output: {Earth: 66.9; Mercury: 278.75 years; Venus: 107.9 years; Mars: 37.18 years; Jupiter: 5.64 years}
  * Spec 6: It compares life expectancy value from lifeexpectancy npm object based on input variable with current age; and it returns how many Earth years left in users life if current age < expectancy age.
    * Example Input: Country: 'India', gender: male, age:30
    * Example Output: 39.9 years
  * Spec 7: It compares life expectancy value from lifeexpectancy npm object based on input variable with current age; and it returns how many years of 'borrowed time' the user is on.
    * Example Input: Country: 'India', gender: male, age:75
    * Example Output: 5.5 years

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