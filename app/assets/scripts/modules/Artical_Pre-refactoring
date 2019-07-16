import $ from 'jquery';

class Artical {
  constructor() {
    //this.openArticalButton = $(".open-artical");
    this.artical = $(".artical");
    //Setting the story references.
    this.articalFirst = $(".artical__story__one");
    this.articalSecond = $(".artical__story__two");
    this.articalThird = $(".artical__story__three");
    this.articalFourth = $(".artical__story__four");
    ///////More//////References/////////////////////
    this.articalFirstClick = $(".story--one");
    this.articalSecondClick = $(".story--two");
    this.articalThirdClick = $(".story--three");
    this.articalFourthClick = $(".story--four");
    ///////////////////////////////////////////////
    this.closeArticalButton = $(".artical__close");
    this.events();
  }

  events() {
    //Setting 'then' to 'this'.
    var then=this;

    // clicking the x close artical button
    this.closeArticalButton.click(this.closeArtical.bind(this));

    /*If the site address has a change, check if
     the artical is open when it happens. If so,
    close it. So, if the back button, or the
    refresh button are pressed, it will simply
    appear to close the artical.*/

    window.onhashchange = function (e) {
      if (location.hash === '#artical') {
        //console.log("You're visiting a cool feature!");
      }
      else {
        //console.log("An Artical was open, but we will close it now.");
        then.closeArtical();
      }
    }

    //Setting the artical click behaviors.
    this.articalFirstClick.click(this.setArticalOne.bind(this));
    this.articalSecondClick.click(this.setArticalTwo.bind(this));
    this.articalThirdClick.click(this.setArticalThree.bind(this));
    this.articalFourthClick.click(this.setArticalFour.bind(this));

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeArtical();
    }
  }

  setArticalOne() {
    this.articalFirst.addClass("artical__story__one--visible");
    this.openArtical();
  }

  setArticalTwo() {
    this.articalSecond.addClass("artical__story__two--visible");
    this.openArtical();
  }

  setArticalThree() {
    this.articalThird.addClass("artical__story__three--visible");
    this.openArtical();
  }

  setArticalFour() {
    this.articalFourth.addClass("artical__story__four--visible");
    this.openArtical();
  }

  openArtical() {
    this.artical.addClass("artical--open");
    return false;
  }

  clearArticals()
  {
    this.articalFirst.removeClass("artical__story__one--visible");
    this.articalSecond.removeClass("artical__story__two--visible");
    this.articalThird.removeClass("artical__story__three--visible");
    this.articalFourth.removeClass("artical__story__four--visible");
  }

  closeArtical() {
    this.artical.removeClass("artical--open");
    this.clearArticals();
  }
}

export default Artical;
