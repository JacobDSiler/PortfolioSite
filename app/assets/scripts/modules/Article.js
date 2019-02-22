import $ from 'jquery';

class Article {
  constructor() {
    this.openArticleButton = $(".open-article");
    this.article = $("article");
    this.closeArticleButton = $(".article__close");
    this.events();
  }

  events() {
    // clicking an open article button
    this.openArticleButton.click(this.openArticle.bind(this));

    // clicking the x close article button
    this.closeArticleButton.click(this.closeArticle.bind(this));

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeArticle();
    }
  }

  openArticle() {
    this.article.addClass("article--open");
    return false;
  }

  closeArticle() {
    this.article.removeClass("article--open");
  }
}

export default Article;
