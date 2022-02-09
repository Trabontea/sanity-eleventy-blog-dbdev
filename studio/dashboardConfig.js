export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6204523c4aaa175de8be11dc',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-juzrno58',
                  apiId: '66d830ee-5e3f-44b7-a277-ddd800243383'
                },
                {
                  buildHookId: '6204523cabba3a54ff6e4f73',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-9ruau1h6',
                  apiId: 'f9e62535-a21b-4056-b588-5be79da18b89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Trabontea/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-9ruau1h6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
