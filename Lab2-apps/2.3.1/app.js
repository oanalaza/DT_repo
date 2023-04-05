var app = new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        process: function(){

        
             if(this.message == '123'){
            alert('You entered 123');

        }
        }
    }
})