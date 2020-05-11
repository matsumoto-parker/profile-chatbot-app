const defaultDataset = {
  init: {
    answers: [
      { content: 'どんな言語・技術を勉強しているの？', nextId: 'learning' },
      {
        content: 'ほんとに勉強しているの？',
        nextId: 'studying',
      },
      { content: 'どんなものを制作したの？', nextId: 'copying' },
      { content: '雇用したい！', nextId: 'interesting' },
    ],
    question: 'はじめまして！松本の何が知りたいですか？',
  },
  learning: {
    answers: [
      {
        content: 'ポートフォリオを見てみる',
        nextId: 'https://twitter.com/pakerpaka',
      },
      { content: '興味を持った', nextId: 'interesting' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question:
      'Reactをメインに学習しています！そして、フロントエンドエンジニアへの転職を目指しています！',
  },
  studying: {
    answers: [
      {
        content: 'GitHubをチェック',
        nextId: 'https://github.com/matsumoto-parker',
      },
      {
        content: 'twitterで学習状況チェック',
        nextId: 'https://twitter.com/pakerpaka',
      },
      { content: '興味を持った', nextId: 'interesting' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: '日々の学習における気付きをtwitterで発信しています！',
  },
  copying: {
    answers: [
      {
        content: 'レシピ検索アプリ',
        nextId: 'https://matsumoto-parker.github.io/food-searching-app/',
      },
      {
        content: 'タスク管理アプリ',
        nextId: 'https://matsumoto-parker.github.io/task-manager-app/',
      },
      { content: '興味を持った', nextId: 'interesting' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question:
      '主にwebアプリの模写をしています。ただコードを写すわけではなく、GitHubでブランチを切って作業することで、擬似的にチーム開発を行っています。',
  },
  interesting: {
    answers: [
      { content: '今すぐ問い合わせる', nextId: 'contact' },
      {
        content: 'ツイッターにDMする',
        nextId: 'https://twitter.com/pakerpaka',
      },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'ありがとうございます！下記どちらからでもお問いあわせできます。',
  },
};

export default defaultDataset;
