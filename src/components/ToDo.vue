<template>
    <div class="container mx-auto">
                <div class="container">
                    <div class="py-12">
                    <h1 class="text-center text-5xl text-gray-600">{{ title }}</h1>
                    </div>

                  <form class="todo-form" @submit.prevent="submit">
                    <Form :value="newTodoItem"/>
                  </form>
                  <div class="my-4 max-w-xl mx-auto">
                        <ul class="flex justify-between">
                            <li @click="sortAll" class="mr-8 text-gray-500 align-middle cursor-pointer">
                                <i class="material-icons">
                                    keyboard_arrow_down
                                </i>
                                All
                            </li>
                            <li @click="sortCompleted" class="mr-8 text-gray-500 align-middle cursor-pointer">
                                <i class="material-icons">
                                    keyboard_arrow_down
                                </i>
                                Completed
                            </li>
                           <li @click="sortTrashed" class="text-gray-500 align-middle cursor-pointer">
                                <i class="material-icons">
                                    keyboard_arrow_down
                                </i>
                                Trashed
                            </li>

                             <li @click="clearCompleted" class="ml-auto text-gray-500 align-middle cursor-pointer">
                                <i class="material-icons">
                                    delete_outline
                                </i>
                                Trash Completed
                            </li>
                        </ul>
                    </div> 

                    <div class="my-4 p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md">

                            <div v-for="(todoItem, todoItemIndex) in filteredTodos" :key="todoItemIndex" class="flex items-center py-3">
                                <div class="flex items-center mr-auto w-full">
                                    <div class="flex-1">
                                        <label for="checkBox" class="bg-white border-2 rounded-full border-gray-200 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-4 focus-within:border-blue-300">
                                            <input 
                                                @click="changeState(todoItem)" 
                                                class="opacity-0 absolute cursor-pointer w-8 h-8" 
                                                id="checkBox"
                                                />
                                            <svg 
                                                v-show="todoItem.state" 
                                                class="fill-current w-4 h-4 text-blue-500"
                                                viewBox="0 0 20 20">
                                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                                            </svg>
                                        </label>
                                    </div>

                                    <div class="w-full">
                                        <div v-if="activeItemEditIndex !== todoItemIndex" class="text-left">
                                            {{ todoItem.name }}
                                        </div>

                                        <div v-else>
                                            <input
                                                type="text"
                                                v-model="todoItem.name"
                                                class="outline-none border-b-2 border-fuchsia-600 w-11/12"
                                                />
                                        </div>
                                        <!-- {{ todoItemIndex }}{{ todoItem }} -->
                                    </div>
                                </div>  
                                

                                <div class="flex items-center">
                                    <button 
                                        v-if="activeItemEditIndex === todoItemIndex"
                                        @click="activeItemEditIndex = null"
                                        class="mr-3 bg-yellow-300 rounded h-8 w-8 flex items-center justify-center">
                                        <i class="material-icons text-white">save</i>
                                    </button>
                                    <button 
                                        v-if="activeItemEditIndex !== todoItemIndex"
                                        @click="editItem(todoItemIndex)"
                                        class="mr-3 bg-blue-300 rounded h-8 w-8 flex items-center justify-center">
                                        <i class="material-icons text-white">edit</i>
                                    </button>
                                    <button 
                                        @click="removeItem(todoItem)"
                                        class="bg-gray-300 rounded h-8 w-8 flex items-center justify-center">
                                        <i class="material-icons text-white">clear</i>
                                    </button>
                                </div>
                            </div>
                    </div> 
            </div>
        </div>
</template>
<script>
import Form from './Form.vue'

export default {
    name: 'ToDo',
    components:{
      Form,
    },
    data(){
        return{
            title: 'To do app',
            todoStorage: [],
            newTodoItem: '',
            activeFilter: null,
            activeItemEditIndex: null
        }
    },

    computed: {
                filteredTodos() {
                    switch (this.activeFilter) {

                        case 'completed':

                            return this.todoStorage.filter(function(todoItem) {
                                //filter?
                                return todoItem.state && !todoItem.trashed;
                                // return todoItem.state === true;
                            });

                        case 'trashed':

                            return this.todoStorage.filter(function(todoItem) {
                                return todoItem.trashed;
                            });

                        case null:
                        default:

                            return this.todoStorage.filter(function(todoItem) {
                                
                                return !todoItem.trashed;
                                
                            });

                    }
                },
            },
    methods:{
            submit: function($event){
              this.newTodoItem = $event.target[0].value
                let todoStorageLength = this.todoStorage.length;
                this.todoStorage.push({
                    id: todoStorageLength++,
                    name: this.newTodoItem,
                    state: false
                })
                this.newTodoItem = '';

                console.log(this.todoStorage)
                
                // if (this.newTodoItem.length > 0){

                //     this.todos.push({
                //         id: this.todoStorage.uid++,
                //         name: this.newTodoItem,
                //         state:false
                //     });

                //     this.newTodoItem = '';
                //     console.log('Done pushing')
                // }
            },

            changeState: function(todoItem){
                todoItem.state = !todoItem.state;
                // if(todoItem.state === true){
                //     show:true;

                // }else if(todoItem.state === false){
                //     show:false;
                // }
            },
            removeItem: function(todoItem){
                var index = this.todoStorage.indexOf(todoItem);
                this.todoStorage.splice(index,1);
                // indexOf = find?
                // splice??
            },
                sortAll: function(){
                    this.activeFilter = null;
                },
                sortCompleted: function(){
                    this.activeFilter = 'completed';
                },
                sortTrashed: function(){
                    this.activeFilter = 'trashed';
                },

                editItem(todoItemIndex){
                    this.activeItemEditIndex = todoItemIndex;
                    // console.log(this.activeItemEditIndex);
                },
                
                clearCompleted: function(){

                    this.todoStorage.filter(item => {
                      return item.state
                    }).map(item => {
                      item.trashed = true;
                    });

                    // this.todoStorage.filter(item => item.state).map((item) => {
                    //   item.trashed = true;
                    // });
                    //
                    //mapで各要素1つずつに対して「コールバック関数」を実行

                    // var that = this;

                    // this.todoStorage.forEach(function (todoItem, todoItemIndex) {
                    //         console.log('clearCompleted');
                    //     if (todoItem.state) {
                    //         that.$set(that.todoItem[todoItemIndex], 'trashed', true);
                    //     }

                    // });
                }
            },
            // watch:{
            //     todos:{
            //         handler:function(todos){
            //             todoStorage.save(todos)
            //         },
            //         deep:true
            //     }
            // },
            // created(){
            //     this.todos = todoStorage.fetch()
            // }
    
}

</script>
<style scoped>
</style>