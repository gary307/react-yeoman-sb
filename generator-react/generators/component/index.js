var Generator = require('yeoman-generator');
var rename = require('gulp-rename');

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
                message: 'Component name',
                default: this.appname // Default to current folder name
            },
            {
                type: 'list',
                name: 'type',
                message: 'Type of component',
                choices: ['class', 'stateless']
            }
        ]);
    }

    //running methods
    writing() {
        // this.registerTransformStream(
        //     rename(function(path) {
        //         path.basename = path.basename.replace(
        //             'title',
        //             context.answers.title
        //         );
        //     })
        // );

        const compName = this.answers.title.replace(
            this.answers.title.charAt(0),
            this.answers.title.charAt(0).toUpperCase()
        );

        const className = this.answers.title;

        this.log(compName);

        this.fs.copyTpl(
            this.answers.type === 'class'
                ? this.templatePath('ccp/title.js')
                : this.templatePath('scp/title.js'),
            this.destinationPath(`src/components/${compName}/${compName}.js`),
            {
                title: compName,
                className: className
            }
        );

        this.fs.copyTpl(
            this.answers.type === 'class'
                ? this.templatePath('ccp/title.scss')
                : this.templatePath('scp/title.scss'),
            this.destinationPath(
                `src/components/${className}/${className}.scss`
            ),
            {
                title: className
            }
        );

        this.fs.copyTpl(
            this.answers.type === 'class'
                ? this.templatePath('ccp/title.stories.js')
                : this.templatePath('scp/title.stories.js'),
            this.destinationPath(
                `src/components/${compName}/${compName}.stories.js`
            ),
            {
                title: compName
            }
        );
    }
};
