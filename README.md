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
| jasmine           | spec tester              | runs spec tests as defined in spec calc-spec.js file  |
| karma          | works w/ jasmine in real time browser reference            | runs spec tests on reload automatically  |

2. Specs
  * Spec 1: It takes an input age (in years) and coverts it into seconds
    * Example Input: 30 years
    * Example Output: 946707780 seconds
  * Spec 2: It compares input birthdate (month/day/year) and calculates the difference (in seconds) between that date and current date.
    * Example Input: March 10, 1990
    * Example Output: 878,213,049 seconds
  * Spec 3: It manipulates age data to calculate age in years on 4 different planets: Mercury, Venus, Mars, Jupiter.
    * Example Input: Age in years = 28;
    * Example Output: Mercury- 113.19; Venus- 43.81; Mars- 14.45; Jupiter- 2.3;
  * Spec 4: It pulls life expectancy value from lifeexpectancy npm object based on input variable.
    * Example Input: Country: 'India', gender: male
    * Example Output: {Earth: 66.9; Mercury: 278.75 years; Venus: 107.9 years; Mars: 37.18 years; Jupiter: 5.64 years}
  * Spec 5: It compares avg life expectancy of user demographic (as defined by input) against user age and returns difference if current age < expectancy age.
    * Example Input: Country: 'India', gender: male, age:30
    * Example Output: 39.9 years remaining
  * Spec 6: It compares avg life expectancy of user demographic (as defined by input) against user age and returns difference if current age > expectancy age.
    * Example Input: Country: 'India', gender: male, age:75
    * Example Output: 5.5 years

3. With more time, a sleeker and more entertaining UI would be developed with solid voice and thematic elements.
