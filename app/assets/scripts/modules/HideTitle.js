//jshint esversion:6
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class HideTitle {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  Reveal() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          if (this.currentItem == $("headline__title")) {
            $(currentItem).addClass("hide");
          }
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default HideTitle;
