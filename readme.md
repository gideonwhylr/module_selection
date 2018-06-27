# Basic Prototype Template
This template will help you get started prototyping with bootstrap. It includes [bootstrap 4.0](https://getbootstrap.com/), [angularjs](https://angularjs.org/), 2 google fonts and [font awesome](https://fontawesome.com/icons).

## Getting Started
Download this folder and start editing [index.html](index.html).

### Interactive
To make the prototype interactive use AngularJS and edit [app.js](app.js).

### Examples
Check out the [example.html](example.html) and [example.js](example.js) file for a list of example interactive components and modules

See a [hosted version of the examples here](https://prototype-template.netlify.com/examples.html).

### Styling
To add styling you can use [all.css](all.css).

If you want to customize bootstrap or use scss you should edit [./scss/custom.scss](./scss/custom.scss`)

For helping [theming bootstrap 4 see here](https://getbootstrap.com/docs/4.0/getting-started/theming/)

To precompile then you should run the command
```
sass scss/custom.scss bootstrap.css
```

If you want it to actively compile while you are making changes run the command
```
sass --watch scss/custom.scss:bootstrap.css
```

If you need to install sass on a mac run this command (you might need to run with sudu)
```
gem install sass
```

### Viewing
Simply open the `index.html` file in chrome. If you want to host it somewhere [surge.sh](http://surge.sh/) or [netlify](https://www.netlify.com/) is a good option.
