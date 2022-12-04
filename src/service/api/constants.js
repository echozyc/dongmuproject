const urls = {
  server: {
    development: 'http://tomodesign.cn/public/index.php/portal/api',
    production: 'http://tomodesign.cn/public/index.php/portal/api'
  },
  /**
  * @methods: 文章列表
  * @params: id  {Number/String} 8 项目 9 新闻
  */
  article_list: {
    url: '/article_list'
  },
  /**
  * @methods: 文章详情
  * @params: id  {Number/String} 8 项目 9 新闻
  * @params: cid  {Number/String} 8 项目 9 新闻
  */
  article: {
    url: '/article'
  },
  /**
  * @methods: 页面信息
  * @params: id  {Number/String}  1 关于我们  2 联系我们
  */
  page: {
    url: '/page'
  },
  /**
  * @methods: 网站信息
  */
  index: {
    url: '/index'
  },
  /**
   * @methods: 文章分类
   * @params: id  {Number/String} 8 项目 9 新闻
   */
  articleCat: {
    url: '/article_cat'
  },

}

export {urls}
