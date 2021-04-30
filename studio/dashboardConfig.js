export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '608bedd889eb3aca3455c373',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-1-studio-xs1uhh6o',
                  apiId: 'e032ab11-b41a-42c5-8db7-bfeab03f73aa'
                },
                {
                  buildHookId: '608bedd96991fbc916937673',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-1-web-jmr3fb5y',
                  apiId: '0585b1e7-8f66-4dea-9a27-e52f8ebb26df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcinrck/sanity-nextjs-landing-pages-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-1-web-jmr3fb5y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
