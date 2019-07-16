//jshint esversion:6

import $ from 'jquery';

class Artical {
  constructor() {
    this.nums = ['one', 'two', 'three', 'four']; //Storing number names in an array so I can access them with indices 0-3 for all following for loops.
    this.articals = []; //\\\\\\\\\\\\\\\\Artical DOM references array.
    this.articalClick = []; //\\\\\\\\\\\\\\\\Artical clicking references array.
    //setting the reference to artical;
    this.artical = $(".artical");

    for (let i = 0; i <= 3; i++) {
      //Setting 0-3 of the story references.
      this.articals.push($(".artical__story__" + this.nums[i]));
      ///////Click/////References/////////////////////
      this.articalClick.push($(".story--" + this.nums[i]));
    }

    ///////////////////////////////////////////////
    this.closeArticalButton = $(".artical__close");
    this.events();
  }

  events() {
    //Setting 'then' to 'this'.
    var then = this;

    // Set the behavior when clicking the x close artical button
    this.closeArticalButton.click(this.closeArtical.bind(this));

    /*If the site address has a change, check if
     the artical is open when it happens. If so,
    close it. So, if the back button, or the
    refresh button are pressed, it will simply
    appear to close the artical.*/

    window.onhashchange = function(e) {
      if (location.hash === '#artical') {
      } else {
        then.closeArtical();
      }
    };

    //Setting all of the artical click behaviors.
    for (let i = 0; i <= 3; i++) {
      this.articalClick[i].click(function() {
        then.setArtical(i);
      });
    }

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) { //If the returned key is the esc key.
      this.closeArtical();
    }
  }

  numToName(n) {
    return this.nums[n];
  }

  setArtical(A) {
    var then = this;
    //Adding the '--visible' class the clicked artical.
    //Using the 'nums' array to find the written name of the index 'A'.
    this.articals[A].addClass("artical__story__" + then.nums[A] + "--visible");
    this.openArtical();
  }

  openArtical() {
    this.artical.addClass("artical--open");
    return false;
  }

  clearArticals() {
    var then = this;
    //Removing the '--visible' class from all of the articals to hide them.
    for (var i = 0; i < this.articals.length; i++) {
      //Using the 'nums' array to find the written name of the index 'i'.
      then.articals[i].removeClass("artical__story__" + then.nums[i] + "--visible");
    }
  }

  closeArtical() {
    //Here the atical--open class is removed from the artical DOM element and then clearArticals removes the '--visible' modifier class from all the articals.
    this.artical.removeClass("artical--open");
    this.clearArticals();
  }
}

export default Artical;
