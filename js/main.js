let app = new Vue({
    el: "#menu",
  
    data : {
        name : '',
        listDish : 
        [
            {name: 'piza', discription: "italy food"},
            {name: 'suhi', discription: "japan food"},
            {name: 'beer', discription: "best food"},
            {name: 'cola', discription: "good with whisky"},
        ],
        orders:[],
    },
    methods: {
        addDish : function(name, discription){
            this.orders.unshift({name, discription});
        },

        del : function(id){
            this.orders.splice(id, 1);
        }
    },
})