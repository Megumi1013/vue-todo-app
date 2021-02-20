<template>
    <div class="container mx-auto">
        <div class="container">
            <div class="py-12">
                <h1 class="text-center text-5xl text-gray-600">{{ title }}</h1>
            </div>

            <Form/>

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
                <todo-item v-for="(todoItem, todoItemIndex) in todos" :key="todoItemIndex" :item="todoItem" :item-index="todoItemIndex"></todo-item>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Form from './Form'
import TodoItem from './TodoItem'

export default {

    name: 'ToDo',

    components: {
        Form,
        TodoItem
    },

    data() {
        return {
            title: 'To do app'
        }
    },

    computed: {

        ...mapGetters({
            todos: 'todos/items'
        }),

    },
    methods: {

        ...mapActions({
            setActiveFilterAction: 'todos/setActiveFilter',
        }),

        sortAll: function () {
            this.setActiveFilterAction(null);
        },

        sortCompleted: function () {
            this.setActiveFilterAction('completed');
        },

        sortTrashed: function () {
            this.setActiveFilterAction('trashed');
        },

        clearCompleted: function () {
            this.todos.filter(item => {
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
