(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA2n9YUORKUMW2P-2vkhrc6R6X-NkGmaZY",
        authDomain: "popping-fire-9851.firebaseapp.com",
        databaseURL: "https://popping-fire-9851.firebaseio.com",
        storageBucket: "popping-fire-9851.appspot.com",
    };
    firebase.initializeApp(config);

    angular
        .module('app', ['firebase'])
        .controller('MyCtrl', function($firebaseObject) {
            const rootRef = firebase.database().ref().child('angular');
            const ref = rootRef.child('object');
            this.object = $firebaseObject(ref);
        });


}());
