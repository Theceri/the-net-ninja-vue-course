Vue.component('greeting', {
    template: '<p>My names are {{ name }}. <button v-on:click="changeName">Change Name</button></p>',
    data: function(){
        return {
            name: 'Theceri'
        }
    },
    methods: {
        changeName: function(){
            this.name = 'Mario';
        }
    }
})

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});