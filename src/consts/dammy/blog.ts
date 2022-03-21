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
    title: 'Macでもtreeコマンドを使いたい！',
    image:
      '//images.ctfassets.net/6c3h1vzo5ct6/2rNugxACfcknP1o98cFX0E/2e9e8756c18a85d3a0be9537158a3e9c/Group_16.png',
    created_at: '2022-03-08',
    updated_at: '2022-03-19',
    content: [
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'treeコマンドは、ディレクトリやファイルを以下のようにツリー状に出力できます。私はREADME.mdでフォルダ構成を説明する際によく利用します。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [
              {
                type: 'code',
              },
            ],
            value:
              '.\n├── __tests__\n├── public\n│   ├── fonts\n│   └── images\n└── src\n    ├── components\n    │   └── Button\n    ├── consts\n    ├── contexts\n    ├── hooks\n    ├── libs\n    ├── pages\n    │   └── api\n    ├── styles\n    └── types\n        └── json',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'windows PCだとコマンドプロンプトでtreeコマンドを利用可能ですが、linuxではデフォルトではインストールされていないため、別途インストールする必要があります。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              '今回は、私の利用しているmac（以下のバージョン参照）でインストールしました。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'OS: macOS Big Sur バージョン11.1',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'MacBook Pro（13-inch, M1, 2020）',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: 'チップ Apple M1',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: '使用しているshell: zsh',
                nodeType: 'text',
              },
            ],
            nodeType: 'paragraph',
          },
        ],
        nodeType: 'blockquote',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'ちなみにインストールされていない場合は以下のように出力されます。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
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
              id: 'GFMUEs1pBrlHqK7sG9tvd',
              type: 'Entry',
              createdAt: '2022-03-08T14:32:53.918Z',
              updatedAt: '2022-03-08T14:32:53.918Z',
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
                        value: '>>> tree\nzsh: command not found: tree',
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
        content: [],
        nodeType: 'embedded-entry-block',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: 'treeコマンドのインストール',
            nodeType: 'text',
          },
        ],
        nodeType: 'heading-2',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: 'treeコマンドのインストールはhomebrewを用いて行います。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: '',
            nodeType: 'text',
          },
          {
            data: {
              uri: 'https://formulae.brew.sh/formula/tree',
            },
            content: [
              {
                data: {},
                marks: [],
                value: 'https://formulae.brew.sh/formula/tree',
                nodeType: 'text',
              },
            ],
            nodeType: 'hyperlink',
            ogp: {
              'og:title': 'tree',
              'og:locale': 'en_US',
              'og:description': 'Homebrew’s package index',
              'og:url': 'https://formulae.brew.sh/formula/tree',
              'og:site_name': 'Homebrew Formulae',
              'og:image': 'https://brew.sh/assets/img/homebrew-256x256.png',
              'og:type': 'website',
              'twitter:image':
                'https://brew.sh/assets/img/homebrew-256x256.png',
              'twitter:title': 'tree',
              'article:publisher': 'https://www.facebook.com/machomebrew/',
            },
          },
          {
            data: {},
            marks: [],
            value: '',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: '以下のコマンドを実行するとインストールができます。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
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
              id: '7k2LDdgp6NXXitdoJwXxpG',
              type: 'Entry',
              createdAt: '2022-03-08T14:36:17.382Z',
              updatedAt: '2022-03-08T14:36:17.382Z',
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
                        value: 'brew install tree',
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
        content: [],
        nodeType: 'embedded-entry-block',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'インストールが完了すると、treeコマンドが使えるようになります。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
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
              id: '1udpwVc85lHPFUTWI9gVu4',
              type: 'Entry',
              createdAt: '2022-03-08T14:38:27.624Z',
              updatedAt: '2022-03-08T14:38:27.624Z',
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
                          '>>> tree --version\ntree v2.0.2 (c) 1996 - 2022 by Steve Baker, Thomas Moore, Francesc Rocher, Florian Sesser, Kyosuke Tokoro',
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
        content: [],
        nodeType: 'embedded-entry-block',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: 'よく使うコマンド集',
            nodeType: 'text',
          },
        ],
        nodeType: 'heading-2',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'treeコマンドはオプションによって様々な出力が可能です。普段使えるオプションの組み合わせをいくつか紹介します。オプションの全ての説明は',
            nodeType: 'text',
          },
          {
            data: {
              uri: 'http://mama.indstate.edu/users/ice/tree/tree.1.html',
            },
            content: [
              {
                data: {},
                marks: [],
                value: 'こちらのドキュメント',
                nodeType: 'text',
              },
            ],
            nodeType: 'hyperlink',
            ogp: {},
          },
          {
            data: {},
            marks: [],
            value: 'に記載されています。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: 'ディレクトリのみ出力したい',
            nodeType: 'text',
          },
        ],
        nodeType: 'heading-3',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'ディレクトリの構造を示したいだけであればフォルダの中のファイルまでツリー構造で示す必要がありません。そのため、ディレクトリのみ出力するには、以下のコマンドを実行します。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [
              {
                type: 'code',
              },
            ],
            value: 'tree -d .',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: '特定のフォルダ / ファイルは出力しない',
            nodeType: 'text',
          },
        ],
        nodeType: 'heading-3',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: '例えば、node_modulesは出力から外す、とかですね',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [
              {
                type: 'code',
              },
            ],
            value: 'tree -I node_modules',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'git管理してるフォルダ / ファイルだけ出力したい場合は以下のオプションを使用します。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [
              {
                type: 'code',
              },
            ],
            value: 'tree --gitignore',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: '.gitignoreの書き方の注意点としては、',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [
              {
                type: 'code',
              },
            ],
            value: '/node_modules',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [],
            value: 'と記載すると除外してくれず',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [
              {
                type: 'code',
              },
            ],
            value: 'node_modules',
            nodeType: 'text',
          },
          {
            data: {},
            marks: [],
            value: 'と書く必要があります。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: 'サイズも出力したい',
            nodeType: 'text',
          },
        ],
        nodeType: 'heading-3',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              '場合によっては、ファイル / フォルダのサイズを知りたいことがあります。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [
              {
                type: 'code',
              },
            ],
            value: 'tree -I node_modules --du',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: 'こうすると以下のような出力がされます。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [
              {
                type: 'code',
              },
            ],
            value:
              '[      32614]  .\n├── [       6579]  components\n│   ├── [       1342]  Button\n│   │   └── [       1246]  index.tsx\n│   ├── [        270]  Footer\n│   │   └── [        174]  index.tsx\n│   ├── [       1943]  Head.tsx\n│   ├── [       1089]  Layout.tsx\n│   ├── [        941]  Logo\n│   │   └── [        845]  index.tsx\n│   ├── [        476]  Pressable\n│   │   └── [        380]  index.tsx\n│   └── [        230]  Spacer\n│       └── [        134]  index.tsx\n（省略）\n└── [       1576]  types\n    ├── [        250]  auth.ts\n    ├── [         47]  button.ts\n    ├── [        118]  index.ts\n    ├── [        812]  json\n    │   └── [        716]  index.d.ts\n    ├── [         41]  logo.ts\n    └── [         52]  meta.ts',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: 'なお[]の中の数値の単位はバイト（B）です。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: '色をつけて映えを狙いたい',
            nodeType: 'text',
          },
        ],
        nodeType: 'heading-3',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              '冗談はさておき、例えば、画像として貼り付けたい場合などに、ツリーに色が欲しいなーというときに使うオプション',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [
              {
                type: 'code',
              },
            ],
            value: 'tree -C',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: 'こうすると、私の環境では以下のように出力されます。',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
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
              id: '2FDkXIDtiLb8vOP6dD0r2l',
              type: 'Asset',
              createdAt: '2022-03-08T15:35:33.227Z',
              updatedAt: '2022-03-08T15:35:33.227Z',
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
              title: 'tree-command-C-image',
              description:
                'tree-commandのオプションでLS_COLORSの色情報を使用した状態の画像',
              file: {
                url: '//images.ctfassets.net/6c3h1vzo5ct6/2FDkXIDtiLb8vOP6dD0r2l/9f7ce0ace9bced86ca641595ae9bca29/Group_198.png',
                details: {
                  size: 34261,
                  image: {
                    width: 531,
                    height: 322,
                  },
                },
                fileName: 'Group 198.png',
                contentType: 'image/png',
              },
            },
          },
        },
        content: [],
        nodeType: 'embedded-asset-block',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'ちゃんとフォルダに色がついてますね😚 色は自由に変えれるのだろうか😕',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value: '最後に',
            nodeType: 'text',
          },
        ],
        nodeType: 'heading-2',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              '上記で書いた以外にも、様々なオプションがあり、並び替えやファイルへの書き出し、JSONやHTMLへの変換など、様々な方法があります。「これしたいなぁ〜」って思った方は是非挑戦してみてください！',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
      },
      {
        data: {},
        content: [
          {
            data: {},
            marks: [],
            value:
              'もし便利なオプションの組み合わせ知ってるよって方いれば教えてくれたら幸いです😊',
            nodeType: 'text',
          },
        ],
        nodeType: 'paragraph',
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
          id: '1udpwVc85lHPFUTWI9gVu4',
          type: 'Entry',
          createdAt: '2022-03-08T14:38:27.624Z',
          updatedAt: '2022-03-08T14:38:27.624Z',
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
                      '>>> tree --version\ntree v2.0.2 (c) 1996 - 2022 by Steve Baker, Thomas Moore, Francesc Rocher, Florian Sesser, Kyosuke Tokoro',
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
          id: '36RmSxxSTFntOEC3dkXJj',
          type: 'Entry',
          createdAt: '2021-01-04T11:16:32.925Z',
          updatedAt: '2021-10-10T07:11:07.047Z',
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
          categoryName: '開発',
          categoryId: 'develop',
          color: '#76a2f9',
          priority: 30,
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
          id: '73EnXXD9c68EJaDzUpcZCl',
          type: 'Entry',
          createdAt: '2022-03-17T04:47:37.845Z',
          updatedAt: '2022-03-17T05:01:16.015Z',
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
              id: 'blogSeries',
            },
          },
          locale: 'en-US',
        },
        fields: {
          name: 'W Tetris',
          slug: 'w-tetris',
          category: {
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
              id: '36RmSxxSTFntOEC3dkXJj',
              type: 'Entry',
              createdAt: '2021-01-04T11:16:32.925Z',
              updatedAt: '2021-10-10T07:11:07.047Z',
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
              categoryName: '開発',
              categoryId: 'develop',
              color: '#76a2f9',
              priority: 30,
            },
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
          id: '7k2LDdgp6NXXitdoJwXxpG',
          type: 'Entry',
          createdAt: '2022-03-08T14:36:17.382Z',
          updatedAt: '2022-03-08T14:36:17.382Z',
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
                    value: 'brew install tree',
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
          id: 'GFMUEs1pBrlHqK7sG9tvd',
          type: 'Entry',
          createdAt: '2022-03-08T14:32:53.918Z',
          updatedAt: '2022-03-08T14:32:53.918Z',
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
                    value: '>>> tree\nzsh: command not found: tree',
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
          id: '2FDkXIDtiLb8vOP6dD0r2l',
          type: 'Asset',
          createdAt: '2022-03-08T15:35:33.227Z',
          updatedAt: '2022-03-08T15:35:33.227Z',
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
          title: 'tree-command-C-image',
          description:
            'tree-commandのオプションでLS_COLORSの色情報を使用した状態の画像',
          file: {
            url: '//images.ctfassets.net/6c3h1vzo5ct6/2FDkXIDtiLb8vOP6dD0r2l/9f7ce0ace9bced86ca641595ae9bca29/Group_198.png',
            details: {
              size: 34261,
              image: {
                width: 531,
                height: 322,
              },
            },
            fileName: 'Group 198.png',
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
          id: '2rNugxACfcknP1o98cFX0E',
          type: 'Asset',
          createdAt: '2022-03-08T15:55:39.625Z',
          updatedAt: '2022-03-08T15:55:39.625Z',
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
          title: 'thumbnail-tree-command-mac',
          description: 'Macでもtreeコマンドを使いたい！サムネイル',
          file: {
            url: '//images.ctfassets.net/6c3h1vzo5ct6/2rNugxACfcknP1o98cFX0E/2e9e8756c18a85d3a0be9537158a3e9c/Group_16.png',
            details: {
              size: 305982,
              image: {
                width: 908,
                height: 509,
              },
            },
            fileName: 'Group 16.png',
            contentType: 'image/png',
          },
        },
      },
    ],
    author: null,
    lgtm: {
      good: 0,
      bad: 0,
    },
    index: [
      {
        label: 'treeコマンドのインストール',
        type: 'h2',
        index: 0,
      },
      {
        label: 'よく使うコマンド集',
        type: 'h2',
        index: 1,
      },
      {
        label: 'ディレクトリのみ出力したい',
        type: 'h3',
        index: 2,
      },
      {
        label: '特定のフォルダ / ファイルは出力しない',
        type: 'h3',
        index: 3,
      },
      {
        label: 'サイズも出力したい',
        type: 'h3',
        index: 4,
      },
      {
        label: '色をつけて映えを狙いたい',
        type: 'h3',
        index: 5,
      },
      {
        label: '最後に',
        type: 'h2',
        index: 6,
      },
    ],
    tag: {
      label: '開発',
      color: '#76a2f9',
      tag_id: 'develop',
      id: '36RmSxxSTFntOEC3dkXJj',
    },
    series: {
      name: 'W Tetris',
      slug: 'w-tetris',
    },
  },
}
