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
        .config(function($firebaseRefProvider) {
            $firebaseRefProvider.registerUrl({
                default: config.databaseURL,
                object: `${config.databaseURL}/angular/object`
            });
        })
        .factory('ObjectFactory', ObjectFactory)
        .controller('MyCtrl', MyCtrl);

    function ObjectFactory($firebaseObject, $firebaseRef) {
        return $firebaseObject($firebaseRef.object);
    }

    function MyCtrl(ObjectFactory) {
        this.object = ObjectFactory;
        this.sayHello = () => {
            return `Hello, ${this.object.name}`;
        }
    }    

    // Unit test
    const ctrl = new MyCtrl({ name: 'Quentin' });
    const message = ctrl.sayHello();
    console.assert(message === 'Hello, Quentin', `Expected: Hello, Quentin - Actual: ${message}`);    

}());
