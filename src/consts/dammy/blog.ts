export const blogs = {
  settings: {
    success: true,
    data: {
      monthly_archives: [
        { '2022-03': { count: 1 } },
        { '2022-02': { count: 1 } },
        { '2022-01': { count: 2 } },
        { '2021-12': { count: 5 } },
        { '2021-10': { count: 1 } },
        { '2021-08': { count: 1 } },
        { '2021-02': { count: 1 } },
        { '2021-01': { count: 6 } },
      ],
      tag_archives: [
        { frontend: { percent: 75, count: 12, order: 1 } },
        { tsundoku: { percent: 12.5, count: 1, order: 10 } },
        {
          develop: {
            percent: 17,
            order: 30,
            series: ['73EnXXD9c68EJaDzUpcZCl', '5IneHQynSmsqJARCQz441f'],
            count: 3,
          },
        },
        { other: { percent: 12.5, order: 100, count: 1 } },
      ],
      tags: [
        {
          label: 'フロントエンド',
          color: '#ff6469',
          tag_id: 'frontend',
          id: '7IbO2pMYCPfsOp12HmO8vf',
        },
        {
          label: '積読',
          color: '#37b90e',
          tag_id: 'tsundoku',
          id: '5VFkjqFuv31Zb1CzGUlshj',
        },
        {
          label: 'ポートフォリオ裏話',
          color: '#169cbf',
          tag_id: 'portfolio',
          id: '2KPtyTDJ5PZFtrtEzFUSGy',
        },
        {
          label: '開発',
          color: '#76a2f9',
          tag_id: 'develop',
          id: '36RmSxxSTFntOEC3dkXJj',
        },
        {
          label: 'その他',
          color: '#e29300',
          tag_id: 'other',
          id: '6C1X1w8hIFIN4GMl9JFvL',
        },
      ],
    },
  },
  contents: {
    success: true,
    data: {
      contents: [
        {
          title: '3aaaaaa',
          id: '3aaaaaa',
          created_at: '2021-07-11',
          updated_at: '2021-09-11',
          tag: {
            label: 'ポートフォリオ裏話',
            color: '#adff2f',
            tag_id: 'portfolio',
            id: '2KPtyTDJ5PZFtrtEzFUSGy',
          },
          image:
            '//images.ctfassets.net/6c3h1vzo5ct6/3rBIZHnfUXZQB5WAH3bUjU/0dd8f5c012efb124d2b645a086472902/until-release-portfolio-architecture.png',
        },
        {
          title:
            '2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test2test',
          id: '2test',
          created_at: '2021-07-11',
          updated_at: '2021-09-11',
          tag: {
            label: 'ポートフォリオ裏話',
            color: '#adff2f',
            tag_id: 'portfolio',
            id: '2KPtyTDJ5PZFtrtEzFUSGy',
          },
          image:
            '//images.ctfassets.net/6c3h1vzo5ct6/3rBIZHnfUXZQB5WAH3bUjU/0dd8f5c012efb124d2b645a086472902/until-release-portfolio-architecture.png',
        },
        {
          title: 'test-1',
          id: '1',
          created_at: '2021-07-11',
          updated_at: '2021-09-11',
          tag: {
            label: 'ポートフォリオ裏話',
            color: '#adff2f',
            tag_id: 'portfolio',
            id: '2KPtyTDJ5PZFtrtEzFUSGy',
          },
          image:
            '//images.ctfassets.net/6c3h1vzo5ct6/3rBIZHnfUXZQB5WAH3bUjU/0dd8f5c012efb124d2b645a086472902/until-release-portfolio-architecture.png',
        },
        {
          title: 'test-21',
          id: '21',
          created_at: '2021-07-11',
          updated_at: '2021-09-11',
          tag: {
            label: 'ポートフォリオ裏話',
            color: '#adff2f',
            tag_id: 'portfolio',
            id: '2KPtyTDJ5PZFtrtEzFUSGy',
          },
          image:
            '//images.ctfassets.net/6c3h1vzo5ct6/3rBIZHnfUXZQB5WAH3bUjU/0dd8f5c012efb124d2b645a086472902/until-release-portfolio-architecture.png',
        },
        {
          title: 'ポートフォリオ公開に至るまで（アーキテクチャ編）',
          id: 'until_release_pofolio_architecture',
          created_at: '2021-02-02',
          updated_at: '2021-09-11',
          tag: {
            label: 'ポートフォリオ裏話',
            color: '#adff2f',
            tag_id: 'portfolio',
            id: '2KPtyTDJ5PZFtrtEzFUSGy',
          },
          image:
            '//images.ctfassets.net/6c3h1vzo5ct6/3rBIZHnfUXZQB5WAH3bUjU/0dd8f5c012efb124d2b645a086472902/until-release-portfolio-architecture.png',
        },
        {
          title: 'ネストされた動的ルーティングの実装方法',
          id: 'nuxtjs_double_dynamic_routing',
          created_at: '2021-01-23',
          tag: {
            label: 'フロントエンド',
            color: '#ff6469',
            tag_id: 'frontend',
            id: '7IbO2pMYCPfsOp12HmO8vf',
          },
          image:
            '//images.ctfassets.net/6c3h1vzo5ct6/719zVuFAO6NdzPg3vlXk6J/96ecff40c214f98bd2cba30802d1d72d/0124.png',
        },
      ],
      page: {
        current: 1,
        total_count: 1,
      },
    },
  },
}

export const blog = {
  success: true,
  data: {
    title: 'ユーティリティクラスを生成する',
    description:
      'ユーティリティクラスを簡単に生成する方法を紹介します。簡易なサイトを作るだけなのでライブラリを入れたくないなどの場合に活用することができます。',
    image:
      '//images.ctfassets.net/6c3h1vzo5ct6/4ZgkoZNn9DuUMmO5BiZlEk/b47a061cb70333ee3b04dee8afc39600/Group_14.png',
    created_at: '2022-02-03',
    updated_at: '2022-02-03',
    content: [
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              'ユーティリティクラスとは、１つのクラス名が一意のCSSのプロパティと値となるものです。例えば、',
            marks: [],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'm-0',
            marks: [
              {
                type: 'code',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value:
              'というクラス名には以下のようなCSSが当たっており、このクラス名以外に、このプロパティと値の組み合わせのCSSはありません。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'embedded-entry-block',
        content: [],
        data: {
          target: {
            metadata: {
              tags: [],
            },
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: '6c3h1vzo5ct6',
                },
              },
              id: '5CNm92PDABeVGAdlmvdErU',
              type: 'Entry',
              createdAt: '2022-02-03T15:34:31.559Z',
              updatedAt: '2022-02-03T15:34:31.559Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment',
                },
              },
              revision: 1,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'code',
                },
              },
              locale: 'en-US',
            },
            fields: {
              type: 'css',
              code: {
                nodeType: 'document',
                data: {},
                content: [
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value: '.m-0 {\n  margin: 0 !important;\n}',
                        marks: [
                          {
                            type: 'code',
                          },
                        ],
                        data: {},
                      },
                    ],
                    data: {},
                  },
                ],
              },
            },
          },
        },
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: '',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              'そして、このユーティリティクラスをベースに設計されたCSSフレームワークで最も波が来ているのが',
            marks: [],
            data: {},
          },
          {
            nodeType: 'hyperlink',
            content: [
              {
                nodeType: 'text',
                value: 'tailwind css',
                marks: [],
                data: {},
              },
            ],
            data: {
              uri: 'https://tailwindcss.jp/',
            },
            ogp: {
              'og:url': 'https://tailwindcss.com/',
              'og:type': 'article',
              'og:description':
                'A utility-first CSS framework for rapidly building custom user interfaces.',
              'og:image':
                'https://tailwindcss.com/_next/static/media/twitter-large-card.2e0e43628f69eba639f387da72c3e323.png',
              'og:title':
                'Tailwind CSS - A Utility-First CSS Framework for Rapidly Building Custom Designs',
            },
          },
          {
            nodeType: 'text',
            value: 'です。個人的には、',
            marks: [],
            data: {},
          },
          {
            nodeType: 'hyperlink',
            content: [
              {
                nodeType: 'text',
                value: 'ChakraUI',
                marks: [],
                data: {},
              },
            ],
            data: {
              uri: 'https://chakra-ui.com/',
            },
            ogp: {
              'og:url': 'https://chakra-ui.com',
              'og:type': 'website',
              'og:image': 'https://chakra-ui.com/twitter-og-image.png',
              'og:image:alt':
                'Chakra UI: Simple, Modular and Accessible UI Components for your React Applications.',
              'og:image:width': '1012',
              'og:image:height': '506',
              'og:locale': 'en_US',
              'og:site_name':
                'Chakra UI: Simple, Modular and Accessible UI Components for your React Applications.',
              'og:title':
                'Chakra UI - A simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
              'og:description':
                'Simple, Modular and Accessible UI Components for your React Applications. Built with Styled System',
            },
          },
          {
            nodeType: 'text',
            value:
              'が好きですが、どうやらGithubのスター数を比較してみたら（2022/2/3）tailwindの方が人気なようです😱',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'blockquote',
        content: [
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: 'tailwind: 53.2k',
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: 'chakra-ui: 23.8k',
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              'ちなみに、ユーティリティファーストについてtailwindのドキュメントでわかりやすく説明されていたので、より詳細に知りたい方は読んでみてください。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: '',
            marks: [],
            data: {},
          },
          {
            nodeType: 'hyperlink',
            content: [
              {
                nodeType: 'text',
                value: 'https://tailwindcss.jp/docs/utility-first',
                marks: [],
                data: {},
              },
            ],
            data: {
              uri: 'https://tailwindcss.jp/docs/utility-first',
            },
            ogp: {
              'og:url': 'https://tailwindcss.com/docs/utility-first',
              'og:type': 'article',
              'og:description':
                '制約された単純なユーティリティのセットから複雑なコンポーネントを構築します。',
              'og:image':
                'https://tailwindcss.com/_next/static/media/twitter-large-card.2e0e43628f69eba639f387da72c3e323.png',
              'og:title': 'ユーティリティファースト - Tailwind CSS',
            },
          },
          {
            nodeType: 'text',
            value: '',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              '今回は、ユーティリティクラスを簡易に生成する方法をご紹介します。ちょっとしたサイトを使う場合などに利用できます。ちなみに私の場合は、Djangoで作られたサイトのフロントをReact.jsでリプレイスする際に、元々使われていた',
            marks: [],
            data: {},
          },
          {
            nodeType: 'hyperlink',
            content: [
              {
                nodeType: 'text',
                value: 'django-bootstrap',
                marks: [],
                data: {},
              },
            ],
            data: {
              uri: 'https://pypi.org/project/django-bootstrap4/',
            },
            ogp: {
              'og:url': 'https://pypi.org/project/django-bootstrap4/',
              'og:site_name': 'PyPI',
              'og:type': 'website',
              'og:image': 'https://pypi.org/static/images/twitter.6fecba6f.jpg',
              'og:title': 'django-bootstrap4',
              'og:description': 'Bootstrap 4 for Django',
            },
          },
          {
            nodeType: 'text',
            value:
              'のユーティリティクラスをReactで使いたいが、そのためにライブラリをインストールするのは避けたくてこの手法を取りました。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'heading-2',
        content: [
          {
            nodeType: 'text',
            value: '準備',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              '今回はbootstrapを用います。まず、以下のリンクからGitHubに移動してください。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: '',
            marks: [],
            data: {},
          },
          {
            nodeType: 'hyperlink',
            content: [
              {
                nodeType: 'text',
                value: 'https://github.com/twbs/bootstrap',
                marks: [],
                data: {},
              },
            ],
            data: {
              uri: 'https://github.com/twbs/bootstrap',
            },
            ogp: {
              'fb:app_id': '1401488693436528',
              'og:image':
                'https://repository-images.githubusercontent.com/2126244/2389b780-b3b2-11ea-86b3-b834e22f5194',
              'og:image:alt':
                'The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web. - GitHub - twbs/bootstrap: The most popular HTML, CSS, and JavaScript framework for...',
              'og:site_name': 'GitHub',
              'og:type': 'object',
              'og:title':
                'GitHub - twbs/bootstrap: The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.',
              'og:url': 'https://github.com/twbs/bootstrap',
              'og:description':
                'The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web. - GitHub - twbs/bootstrap: The most popular HTML, CSS, and JavaScript framework for...',
            },
          },
          {
            nodeType: 'text',
            value: '',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              '次に、ローカルにクローンします。クローンが終わるとbootstrapというフォルダができるので移動します。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'embedded-entry-block',
        content: [],
        data: {
          target: {
            metadata: {
              tags: [],
            },
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: '6c3h1vzo5ct6',
                },
              },
              id: '2UtiMc3ZEDPx2MVMgllLm3',
              type: 'Entry',
              createdAt: '2022-02-03T15:36:01.534Z',
              updatedAt: '2022-02-03T15:39:28.541Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment',
                },
              },
              revision: 3,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'code',
                },
              },
              locale: 'en-US',
            },
            fields: {
              type: 'bash',
              code: {
                nodeType: 'document',
                data: {},
                content: [
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value:
                          "> git clone https://github.com/twbs/bootstrap.git\nCloning into 'bootstrap'...\nremote: Enumerating objects: 175573, done.\nremote: Total 175573 (delta 0), reused 0 (delta 0), pack-reused 175573\nReceiving objects: 100% (175573/175573), 191.36 MiB | 7.43 MiB/s, done.\nResolving deltas: 100% (115262/115262), done.\n\n> cd bootstrap",
                        marks: [
                          {
                            type: 'code',
                          },
                        ],
                        data: {},
                      },
                    ],
                    data: {},
                  },
                ],
              },
            },
          },
        },
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              '次に、scssフォルダの中のscssファイルをcssにコンパイルします。',
            marks: [],
            data: {},
          },
          {
            nodeType: 'text',
            value: '以降の手順はVSCodeを利用します。',
            marks: [
              {
                type: 'bold',
              },
            ],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'heading-2',
        content: [
          {
            nodeType: 'text',
            value: 'VSCodeの拡張機能のインストール',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              'cssに変換するために、VSCodeでLive Sass Compilerという拡張機能をインストールします。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'blockquote',
        content: [
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: 'Name: Live Sass Compiler',
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: 'Id: ritwickdey.live-sass',
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value:
                  'Description: Compile Sass or Scss to CSS at realtime with live browser reload.',
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: 'Version: 3.0.0',
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: 'Publisher: Ritwick Dey',
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value:
                  'VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass',
                marks: [],
                data: {},
              },
            ],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: '',
            marks: [],
            data: {},
          },
          {
            nodeType: 'hyperlink',
            content: [
              {
                nodeType: 'text',
                value:
                  'https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass',
                marks: [],
                data: {},
              },
            ],
            data: {
              uri: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass',
            },
            ogp: {
              'og:title': 'Live Sass Compiler - Visual Studio Marketplace',
              'og:type': 'website',
              'og:url':
                'https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass',
              'og:image':
                'https://ritwickdey.gallerycdn.vsassets.io/extensions/ritwickdey/live-sass/3.0.0/1531332580258/Microsoft.VisualStudio.Services.Icons.Default',
              'og:description':
                'Extension for Visual Studio Code - Compile Sass or Scss to CSS at realtime with live browser reload.',
              'twitter:card': 'summary',
              'twitter:site': '@Code',
            },
          },
          {
            nodeType: 'text',
            value: '',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              '拡張機能のインストール後、VSCodeの右下に「Watch Sass」というボタンが表示されるようになったと思います。次に、コンパイルする前に設定を行います。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'heading-2',
        content: [
          {
            nodeType: 'text',
            value: '拡張機能Live Sass Compilerの設定',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: '拡張機能のページから、設定画面を開きます。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'embedded-asset-block',
        content: [],
        data: {
          target: {
            metadata: {
              tags: [],
            },
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: '6c3h1vzo5ct6',
                },
              },
              id: '2GsFyNy1eb3XFH2LmoLnbD',
              type: 'Asset',
              createdAt: '2022-02-03T15:58:48.438Z',
              updatedAt: '2022-02-03T15:58:48.438Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment',
                },
              },
              revision: 1,
              locale: 'en-US',
            },
            fields: {
              title: 'generate-utility-css-compiler',
              description: '',
              file: {
                url: '//images.ctfassets.net/6c3h1vzo5ct6/2GsFyNy1eb3XFH2LmoLnbD/09f78f536ebadabaef327e8579e8f57e/Group_6.png',
                details: {
                  size: 462549,
                  image: {
                    width: 1792,
                    height: 1120,
                  },
                },
                fileName: 'Group 6.png',
                contentType: 'image/png',
              },
            },
          },
        },
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              'Settingsが開いた後、「Live Sass Compile › Settings: Formats」の設定を確認します。そして、歯車アイコンからメニューを開き、「Copy Setting as JSON」をクリックし、設定情報をコピーします。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'embedded-asset-block',
        content: [],
        data: {
          target: {
            metadata: {
              tags: [],
            },
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: '6c3h1vzo5ct6',
                },
              },
              id: '3tlMfAA9tbHug741KOMVPR',
              type: 'Asset',
              createdAt: '2022-02-03T16:05:12.022Z',
              updatedAt: '2022-02-03T16:05:12.022Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment',
                },
              },
              revision: 1,
              locale: 'en-US',
            },
            fields: {
              title: 'generate-utility-css-copy-setting',
              description: '',
              file: {
                url: '//images.ctfassets.net/6c3h1vzo5ct6/3tlMfAA9tbHug741KOMVPR/927298ef98a57895a09a18324d83a960/Group_7.png',
                details: {
                  size: 158507,
                  image: {
                    width: 1792,
                    height: 803,
                  },
                },
                fileName: 'Group 7.png',
                contentType: 'image/png',
              },
            },
          },
        },
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              'コピー後、「Edit in settings.json」をクリックし、settings.jsonを開きます。ここで、先ほどコピーしたJSONを貼り付けます。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'embedded-entry-block',
        content: [],
        data: {
          target: {
            metadata: {
              tags: [],
            },
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: '6c3h1vzo5ct6',
                },
              },
              id: '70ferBfK7WM860jNz0elqm',
              type: 'Entry',
              createdAt: '2022-02-03T16:08:50.743Z',
              updatedAt: '2022-02-03T16:11:40.221Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment',
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'code',
                },
              },
              locale: 'en-US',
            },
            fields: {
              type: 'json',
              code: {
                nodeType: 'document',
                data: {},
                content: [
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value:
                          '"liveSassCompile.settings.formats": [\n  {\n    "format": "expanded",\n    "extensionName": ".css",\n    "savePath": null\n  }\n]',
                        marks: [
                          {
                            type: 'code',
                          },
                        ],
                        data: {},
                      },
                    ],
                    data: {},
                  },
                ],
              },
            },
          },
        },
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              'ここで、今回のやりたいことのために、デフォルトの設定を変更していきます。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'savePath',
            marks: [
              {
                type: 'code',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'の値がデフォルトでは',
            marks: [],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'null',
            marks: [
              {
                type: 'code',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value:
              'となっていますが、この値を任意のフォルダ名に変更します。デフォルトのnull値では、コンパイル対象のscssファイルと同じ階層にcssファイルが生成されますが、フォルダ名を指定しておくと、そのフォルダの中にcssファイルが生成されます。もしフォルダがなければ自動生成されるのが地味に便利😆',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: '今回は',
            marks: [],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'savePath',
            marks: [
              {
                type: 'code',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'の値を',
            marks: [],
            data: {},
          },
          {
            nodeType: 'text',
            value: '/css',
            marks: [
              {
                type: 'code',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'とします。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'また、',
            marks: [],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'format',
            marks: [
              {
                type: 'code',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'の値がデフォルトでは',
            marks: [],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'expanded',
            marks: [
              {
                type: 'code',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'となっていますが、こちらは',
            marks: [],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'compressed',
            marks: [
              {
                type: 'code',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'を設定することができます。設定による違いは以下の通りです。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'embedded-entry-block',
        content: [],
        data: {
          target: {
            metadata: {
              tags: [],
            },
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: '6c3h1vzo5ct6',
                },
              },
              id: '1wHBiVw2hz8l0eOZi8JVmH',
              type: 'Entry',
              createdAt: '2022-02-03T16:20:24.186Z',
              updatedAt: '2022-02-03T16:20:24.186Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment',
                },
              },
              revision: 1,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'code',
                },
              },
              locale: 'en-US',
            },
            fields: {
              type: 'css',
              code: {
                nodeType: 'document',
                data: {},
                content: [
                  {
                    nodeType: 'paragraph',
                    content: [
                      {
                        nodeType: 'text',
                        value:
                          '/* expanded */\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n/* compressed */\n*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}@media (prefers-reduced-motion: no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);',
                        marks: [],
                        data: {},
                      },
                    ],
                    data: {},
                  },
                ],
              },
            },
          },
        },
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'ファイルサイズを削減し、視認性が下がっても問題ない場合',
            marks: [
              {
                type: 'bold',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'は',
            marks: [],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'compressed',
            marks: [
              {
                type: 'code',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value: '、そうでない場合は',
            marks: [],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'expanded',
            marks: [
              {
                type: 'code',
              },
            ],
            data: {},
          },
          {
            nodeType: 'text',
            value: 'という使い分けで大丈夫かと思います✋',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: '設定は以上です！',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'heading-2',
        content: [
          {
            nodeType: 'text',
            value: 'scssファイルをコンパイル',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              '最後に、scssファイルをコンパイルします。「Watch Sass」ボタンをクリックしてください。「Working on it...」となり、コンパイルが開始します。「Watching...」となると、コンパイルが完了しており、先ほどsavePathで設定したパスにcssファイルが生成されていることを確認します。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              'ちなみに、「Watching...」は変更の監視をしている状態で、scssファイルを変更したら変更を検知しコンパイルを実行します。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: '生成されたcssファイルは以下の通りです。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'unordered-list',
        content: [
          {
            nodeType: 'list-item',
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value: 'bootstrap-grid.css',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: 'list-item',
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value: 'bootstrap-reboot.css',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: 'list-item',
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value: 'bootstrap-utilities.css',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: 'list-item',
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value: 'bootstrap.css',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
            data: {},
          },
          {
            nodeType: 'list-item',
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value: 'docs.css',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'embedded-entry-block',
        content: [],
        data: {
          target: {
            metadata: {
              tags: [],
            },
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: '6c3h1vzo5ct6',
                },
              },
              id: '1ETR5i6wPOiut3b2IyLGsK',
              type: 'Entry',
              createdAt: '2022-02-03T16:30:54.442Z',
              updatedAt: '2022-02-03T16:30:54.442Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment',
                },
              },
              revision: 1,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'caution-card',
                },
              },
              locale: 'en-US',
            },
            fields: {
              description:
                'cssファイルとは別にcss.mapというソースマップが生成されますが、今回は無視します',
              type: 'info',
            },
          },
        },
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              'あとは、このcssを利用したいプロジェクトにコピーをすれば終了です。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'heading-2',
        content: [
          {
            nodeType: 'text',
            value: 'おまけ：Gist公開してます',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              '今回生成したユーティリティクラスのファイルをGistで公開しています。',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: 'リンク切れてます（すみません、、）',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value:
              'https://gist.github.com/RyoTa0222/56c8d009fe6dd51d0de6a99fce11956d',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
      {
        nodeType: 'embedded-entry-block',
        content: [],
        data: {
          target: {
            metadata: {
              tags: [],
            },
            sys: {
              space: {
                sys: {
                  type: 'Link',
                  linkType: 'Space',
                  id: '6c3h1vzo5ct6',
                },
              },
              id: '39ZW4U2N4zDh3lopwpvLyk',
              type: 'Entry',
              createdAt: '2022-02-03T16:39:08.402Z',
              updatedAt: '2022-02-03T16:39:08.402Z',
              environment: {
                sys: {
                  id: 'master',
                  type: 'Link',
                  linkType: 'Environment',
                },
              },
              revision: 1,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'embedded',
                },
              },
              locale: 'en-US',
            },
            fields: {
              title: 'bootstrap-grid.css',
              embeddedUrl:
                'https://gist.github.com/RyoTa0222/56c8d009fe6dd51d0de6a99fce11956d',
              type: 'gist',
            },
          },
        },
      },
      {
        nodeType: 'paragraph',
        content: [
          {
            nodeType: 'text',
            value: '',
            marks: [],
            data: {},
          },
        ],
        data: {},
      },
    ],
    entry: [
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '6c3h1vzo5ct6',
            },
          },
          id: '1ETR5i6wPOiut3b2IyLGsK',
          type: 'Entry',
          createdAt: '2022-02-03T16:30:54.442Z',
          updatedAt: '2022-02-03T16:30:54.442Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'caution-card',
            },
          },
          locale: 'en-US',
        },
        fields: {
          description:
            'cssファイルとは別にcss.mapというソースマップが生成されますが、今回は無視します',
          type: 'info',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '6c3h1vzo5ct6',
            },
          },
          id: '1wHBiVw2hz8l0eOZi8JVmH',
          type: 'Entry',
          createdAt: '2022-02-03T16:20:24.186Z',
          updatedAt: '2022-02-03T16:20:24.186Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'code',
            },
          },
          locale: 'en-US',
        },
        fields: {
          type: 'css',
          code: {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      '/* expanded */\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n/* compressed */\n*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}@media (prefers-reduced-motion: no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);',
                    marks: [],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '6c3h1vzo5ct6',
            },
          },
          id: '2UtiMc3ZEDPx2MVMgllLm3',
          type: 'Entry',
          createdAt: '2022-02-03T15:36:01.534Z',
          updatedAt: '2022-02-03T15:39:28.541Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 3,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'code',
            },
          },
          locale: 'en-US',
        },
        fields: {
          type: 'bash',
          code: {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      "> git clone https://github.com/twbs/bootstrap.git\nCloning into 'bootstrap'...\nremote: Enumerating objects: 175573, done.\nremote: Total 175573 (delta 0), reused 0 (delta 0), pack-reused 175573\nReceiving objects: 100% (175573/175573), 191.36 MiB | 7.43 MiB/s, done.\nResolving deltas: 100% (115262/115262), done.\n\n> cd bootstrap",
                    marks: [
                      {
                        type: 'code',
                      },
                    ],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '6c3h1vzo5ct6',
            },
          },
          id: '39ZW4U2N4zDh3lopwpvLyk',
          type: 'Entry',
          createdAt: '2022-02-03T16:39:08.402Z',
          updatedAt: '2022-02-03T16:39:08.402Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'embedded',
            },
          },
          locale: 'en-US',
        },
        fields: {
          title: 'bootstrap-grid.css',
          embeddedUrl:
            'https://gist.github.com/RyoTa0222/56c8d009fe6dd51d0de6a99fce11956d',
          type: 'gist',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '6c3h1vzo5ct6',
            },
          },
          id: '5CNm92PDABeVGAdlmvdErU',
          type: 'Entry',
          createdAt: '2022-02-03T15:34:31.559Z',
          updatedAt: '2022-02-03T15:34:31.559Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'code',
            },
          },
          locale: 'en-US',
        },
        fields: {
          type: 'css',
          code: {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value: '.m-0 {\n  margin: 0 !important;\n}',
                    marks: [
                      {
                        type: 'code',
                      },
                    ],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '6c3h1vzo5ct6',
            },
          },
          id: '70ferBfK7WM860jNz0elqm',
          type: 'Entry',
          createdAt: '2022-02-03T16:08:50.743Z',
          updatedAt: '2022-02-03T16:11:40.221Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 2,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'code',
            },
          },
          locale: 'en-US',
        },
        fields: {
          type: 'json',
          code: {
            nodeType: 'document',
            data: {},
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value:
                      '"liveSassCompile.settings.formats": [\n  {\n    "format": "expanded",\n    "extensionName": ".css",\n    "savePath": null\n  }\n]',
                    marks: [
                      {
                        type: 'code',
                      },
                    ],
                    data: {},
                  },
                ],
                data: {},
              },
            ],
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '6c3h1vzo5ct6',
            },
          },
          id: '7IbO2pMYCPfsOp12HmO8vf',
          type: 'Entry',
          createdAt: '2021-01-03T16:13:23.385Z',
          updatedAt: '2021-01-12T16:30:20.915Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 4,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'blogCategory',
            },
          },
          locale: 'en-US',
        },
        fields: {
          categoryName: 'フロントエンド',
          categoryId: 'frontend',
          color: '#ff6469',
          priority: 1,
        },
      },
    ],
    asset: [
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '6c3h1vzo5ct6',
            },
          },
          id: '2GsFyNy1eb3XFH2LmoLnbD',
          type: 'Asset',
          createdAt: '2022-02-03T15:58:48.438Z',
          updatedAt: '2022-02-03T15:58:48.438Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'generate-utility-css-compiler',
          description: '',
          file: {
            url: '//images.ctfassets.net/6c3h1vzo5ct6/2GsFyNy1eb3XFH2LmoLnbD/09f78f536ebadabaef327e8579e8f57e/Group_6.png',
            details: {
              size: 462549,
              image: {
                width: 1792,
                height: 1120,
              },
            },
            fileName: 'Group 6.png',
            contentType: 'image/png',
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '6c3h1vzo5ct6',
            },
          },
          id: '3tlMfAA9tbHug741KOMVPR',
          type: 'Asset',
          createdAt: '2022-02-03T16:05:12.022Z',
          updatedAt: '2022-02-03T16:05:12.022Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'generate-utility-css-copy-setting',
          description: '',
          file: {
            url: '//images.ctfassets.net/6c3h1vzo5ct6/3tlMfAA9tbHug741KOMVPR/927298ef98a57895a09a18324d83a960/Group_7.png',
            details: {
              size: 158507,
              image: {
                width: 1792,
                height: 803,
              },
            },
            fileName: 'Group 7.png',
            contentType: 'image/png',
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '6c3h1vzo5ct6',
            },
          },
          id: '4ZgkoZNn9DuUMmO5BiZlEk',
          type: 'Asset',
          createdAt: '2022-02-03T16:48:35.019Z',
          updatedAt: '2022-02-03T16:48:35.019Z',
          environment: {
            sys: {
              id: 'master',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          locale: 'en-US',
        },
        fields: {
          title: 'utiltyclassを生成する',
          description: '',
          file: {
            url: '//images.ctfassets.net/6c3h1vzo5ct6/4ZgkoZNn9DuUMmO5BiZlEk/b47a061cb70333ee3b04dee8afc39600/Group_14.png',
            details: {
              size: 31980,
              image: {
                width: 908,
                height: 509,
              },
            },
            fileName: 'Group 14.png',
            contentType: 'image/png',
          },
        },
      },
    ],
    author: null,
    lgtm: {
      bad: 0,
      good: 0,
    },
    index: [
      {
        label: '準備',
        type: 'h2',
        index: 0,
      },
      {
        label: 'VSCodeの拡張機能のインストール',
        type: 'h2',
        index: 1,
      },
      {
        label: '拡張機能Live Sass Compilerの設定',
        type: 'h2',
        index: 2,
      },
      {
        label: 'scssファイルをコンパイル',
        type: 'h2',
        index: 3,
      },
      {
        label: 'おまけ：Gist公開してます',
        type: 'h2',
        index: 4,
      },
    ],
    tag: {
      label: 'フロントエンド',
      color: '#ff6469',
      tag_id: 'frontend',
      id: '7IbO2pMYCPfsOp12HmO8vf',
    },
  },
}
