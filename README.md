# front-end template
A powerful front-end boilerplate. Gulp, HTML5 & CSS3, Jade, Stylus, ES6, Autoprefixer, Browsersync


# Features
### HTML
Template engine using Jade. Jade it's preprocessor HTML.

### CSS
- Components system with Stylus. Stylus it's preprocessor CSS. It's also can be SASS, LESS.
- Helpful mixins.
- Minify styles.
- Remove unused CSS styles. For example from CSS libraries like bootstrap.
- Autoprefixer. Parse CSS and add vendor prefixes to rules.

### JavaScript
- Compiles ES6 to ES5.
- Minify.

### Productivity
- Browsersync. It's runs local server and reload the browsers across all your devices when you make changes in your application folder files.
- Hot reload for images. Minify images: svg, png, jpg, gif

Demo: http://ilko.me/

# Installation

1. Install nodejs
5. Install gulp: `npm install gulp -g`
2. Clone this repo
3. `cd` to project directory
4. Run `npm install` to install required files


# Usage

`gulp` compile App and watch files for changes.
`gulp upload` compile App, minify js, remove unused CSS and upload files to server. Check gulpfile.js/config-ftp.js for settings.

# Tasks
This tasks can be run individually.

- `browserSync-reload` Reload page in all your connected devices.
- `clean` Clean build folder.
- `jade` Compile jade.
- `html-prettify` Prettify compiled html.
- `images` Minify images.
- `js` Compile js.
- `js-minify` Minify js.
- `static` Copy everything from static folder. Used for favicons, fonts, css.
- `stylus` Compiles Stylus. Hot reload.
- `css-clean` Analyze HTML files and clean unused CSS styles. Ignore styles with prefix `.js-`. Add vendor prefixes.
- `uploading` Upload build folder on the server.


# Structure of main folders and files

    .
    ├── app                                 # Application folder
    │   ├── atoms                           # Atoms.
    │   │   └── atom-name                   # Atom's example. It's just component Jade + Styl + img
    │   │       ├── img                     # Atom's images
    │   │       ├── atom-name.jade          # Atom's HTML. Jade file with mixin(s)
    │   │       └── atom-name.styl          # Atom's styles. Stylus file
    │   ├── js                              # Store JavaScript
    │   |   └── libs                        # Store JavaScript libraries
    │   ├── layout                          # Layout of application
    │   │   ├── haed.jade                   # Head
    │   │   ├── layout.jade                 # Layout
    │   │   ├── scripts.jade                # Scripts mixin
    │   │   └── styles.jade                 # Styles mixin
    │   ├── pages                           # Pages of application
    │   |   |── index.jade                  # Index
    │   |   └── contacts.jade               # Contacts
    │   ├── static                          # Store static files
    │   |   |── css                         # Store css files
    │   |   |── fonst                       # Store font files
    │   |   |── icons                       # Store favicons files
    │   |   └── img                         # Store images files. Will minify
    │   ├── stylus                          # Store stylus files
    │   │   |── mixins                      # Stylus helpers mixins
    │   │   └── index.styl                  # Main stylus file
    ├── build                               # Build folder
    └── gulpfile.js                         # Gulp config and tasks
        ├── tasks                           # Gulp tasks
        ├── config-ftp.js                   # Config for FTP connection
        ├── index.js                        # Index gulpfile
        └── paths.js                        # Paths config
