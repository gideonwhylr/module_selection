var app = angular.module('app', []);

app.controller('Controller', ['$scope', '$window', '$location', '$anchorScroll',
  function($scope, $window, $location, $anchorScroll) {
    this.title = "Hello World"

    this.bucketItem = "content"


    this.updateBucketItems = function(show){
      this.bucketItem = show
    }

    this.previewImage = "button"
    
    this.updatePreviewImage = function(show){
      this.previewImage = show
    }


    this.showButton = false
    this.updateShowButton = function(show) {
      this.showButton = show
    }

    this.addItem = function() {
      let number = this.items.length + 1
      this.items.push({
        title: "Item " + number,
        subtitle: "Item " + number + " Subtitle",
      })
    }

    this.removeItem = function() {
      this.items.splice(-1, 1)
    }

    this.items = [];
    this.addItem();
    this.addItem();
    this.addItem();

    this.navBarItems = [
      "Knowledge Manager",
      "Listings",
      "Reviews",
      "Pages",
      "Analytics",
    ]
    this.selectedNavItem = "Pages"

    this.subNavItems = [
      "Overview",
      "Knowledge Tags",
      "Landing Pages",
      "Search",
    ]
    this.selectedSubNavItem = this.subNavItems[0]


    this.filters = [{
      icon: "cog",
      text: "All Entities",
    },{
      icon: "crop",
      text: "Filter 1",
    },{
      icon: "cube",
      text: "Filter 2",
    },{
      icon: "compass",
      text: "Filter 3",
    },{
      icon: "desktop",
      text: "Filter 4",
    }]

    this.selectedFilter = this.filters[0]

  }
]);
