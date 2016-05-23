var app = {
    
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        document.querySelector('.ui-content').innerHTML = 'ok';
    }
};

app.initialize();
