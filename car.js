AFRAME.registerComponent('console',{
    schema:{
        message:{type:"string",default:"DEFAULT MESSAGE"}
    },

    init: function(){
        console.log(this.data.message)
    },
});