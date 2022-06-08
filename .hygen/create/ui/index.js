//
// npm run create:ui
//
module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which Atomic Design category?',
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the name of component?',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory? (No problem in blank)',
      },
      {
        type: 'confirm',
        name: 'have_style',
        message: 'Is it have style?',
      },
      {
        type: 'confirm',
        name: 'have_type',
        message: 'Is it have type?',
      },
      {
        type: 'confirm',
        name: 'have_consts',
        message: 'Is it have consts?',
      },
      {
        type: 'confirm',
        name: 'have_hook',
        message: 'Is it have hook?',
      },
      {
        type: 'confirm',
        name: 'memoize',
        message: 'Do you want to memoize the component?',
      },
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { category, component_name, dir, have_type } = answers
      const path = `${category}/${dir ? `${dir}/` : ``}${component_name}`
      const abs_path = `src/components/${path}`
      const type_annotate = have_type ? 'React.FC<Props>' : 'React.FC'
      const props = have_type ? '(props)' : '()'
      return { ...answers, path, abs_path, type_annotate, props }
    })
  },
}
