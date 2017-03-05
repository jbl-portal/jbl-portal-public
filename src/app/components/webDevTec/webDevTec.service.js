(function() {
  'use strict';

  angular
      .module('angularApp')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'JAMBO asbl',
        'url': 'http://www.jamboasbl.com',
        'description': 'JAMBO pour jambo!',
        'logo': 'rsz_portal.png'
      },
      {
        'title': 'Mpore',
        'url': 'http://mpore.org/',
        'description': 'Jambo pour mpore.',
        'logo': 'rsz_portal.png'
      },
      {
        'title': 'Jambonews',
        'url': 'http://www.jambonews.net/',
        'description': 'Platform News information.',
        'logo': 'rsz_portal.png'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
