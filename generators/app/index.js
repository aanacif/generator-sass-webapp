const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  welcome() {
    this.log('Loading Sass boilerplate template files')
  }

  writing() {
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('index.html')
    )
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    )
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    )
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    )
    this.fs.copy(
      this.templatePath('package-lock.json'),
      this.destinationPath('package-lock.json')
    )
    this.fs.copy(this.templatePath('app'), this.destinationPath('app'))
  }

  end() {
    this.log(' ')
    this.log(
      'All files copied! Make sure you have the Gulp CLI installed globally.'
    )
    this.log(' ')
    this.log(
      "Then run 'gulp' in this project directory to run Gulp!"
    );
    this.log(' ')
  }
}