var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
    }

    async prompting() {
        //how to prompt and ask the user
        this.answers = await this.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Your project name',
                default: this.appname // Default to current folder name
            },
            {
                type: 'confirm',
                name: 'router',
                message: 'Would you like to add Router',
                default: 'no'
            },
            {
                type: 'confirm',
                name: 'redux',
                message: 'Would you like to add Redux',
                default: 'no'
            }
        ]);
    }

    //running methods
    writing() {
        this.log(this.answers.router);

        this.fs.copyTpl(
            this.templatePath('reactApp'),
            this.destinationPath('newApp'),
            { title: this.answers.title } // user answer `title` used
        );

        if (this.answers.router) {
            this.fs.copyTpl(
                this.templatePath('router'),
                this.destinationPath('newApp/src/'),
                { title: this.answers.title } // user answer `title` used
            );
        }

        if (this.answers.redux) {
            this.fs.copyTpl(
                this.templatePath('redux'),
                this.destinationPath('newApp/src/'),
                { title: this.answers.title } // user answer `title` used
            );
        }
    }
};
