var contactform = {
    init: function (query) {
        "use strict";
        var objects = document.querySelectorAll(query);

        for (var i = 0; i < objects.length; i++) {
            objects[i];
        }
    }
};

module.exports = function createContactForm () {
    "use strict";
    return Object.create(contactform);
}