new Vue({
    el: '#vue-app',
    data:{
        health: 100,
        burst: false,
    },
    methods:{
        punch:function(){
            this.health -= 10;
            console.log(this.health);
            if(this.health <= 0){
                this.burst = true;
            };
        },
        restart:function(){
            this.health = 100;
            this.burst = false;
            console.log('triggered');
            console.log(this.burst);
        }
    }
});