const app = require('../utils/app.core');

/**
 *  LIVE NEWS
 */
app.createLineslide({
  container: '#lineslide-wrap1',
  lineslide: '.live-news-widget-text',
  speed: 1.5,
  startOffset: 100,
  lineslideItems: [
    {
      title: '<a href="post-v1.html" class="link">Slidey News yayyayaya: </a>',
      content: 'lorem',
      separator: '<span class="separator"><span class="separator-bar">/</span><span class="separator-bar">/</span></span>'
    },
    {
      title: '<a href="post-v1.html" class="link">Slidey News yayyayaya: </a>',
      content: 'lorem',
      separator: '<span class="separator"><span class="separator-bar">/</span><span class="separator-bar">/</span></span>'
    },
    {
      title: '<a href="post-v1.html" class="link">Slidey News yayyayaya: </a>',
      content: 'lorem',
      separator: '<span class="separator"><span class="separator-bar">/</span><span class="separator-bar">/</span></span>'
    },
    {
      title: '<a href="post-v1.html" class="link">Slidey News yayyayaya: </a>',
      content: 'lorem',
      separator: '<span class="separator"><span class="separator-bar">/</span><span class="separator-bar">/</span></span>'
    },
    {
      title: '<a href="post-v1.html" class="link">Slidey News yayyayaya: </a>',
      content: 'lorem',
      separator: '<span class="separator"><span class="separator-bar">/</span><span class="separator-bar">/</span></span>'
    }
  ]
});