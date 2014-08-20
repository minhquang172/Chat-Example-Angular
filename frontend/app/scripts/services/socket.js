'use strict';
angular.module('chatApp')
.factory('chatSocket', function (socketFactory) {

        var myIoSocket = io.connect('http://192.168.1.28:3000');

        var mySocket = socketFactory({
            ioSocket: myIoSocket
        });

        mySocket.forward('broadcast');
      return mySocket;
  });
