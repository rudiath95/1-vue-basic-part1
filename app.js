const app = Vue.createApp({
    data(){
        return{
            showBooks: false,
            title:'This title from the JS',
            author:'This author',
            page:69
        }
    },
    methods: {
        changeTitle(newTitle){
            this.title = newTitle
        },
        toogleShowTheBooks(){
            this.showBooks = !this.showBooks
        }
    },
})

app.mount('#app')
