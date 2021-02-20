<template>

    <form class="todo-form" @submit.prevent="onSubmit">
        <div>
            <input type="text"
                   :disabled="todosLoading"
                   v-model="newItem"
                   placeholder="What do you need to do?"
                   class="p-4 max-w-xl mx-auto bg-white rounded-xl shadow-md flex items-center
                space-x-4 border border-transparent focus:outline-none focus:ring
                focus:ring-blue-300 focus:border-transparent w-full">
        </div>
    </form>

</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {

        name: 'Form',

        data() {
            return {
                newItem: ''
            }
        },

        computed: {

            ...mapGetters({
                todoItems: 'todos/items',
                todosLoading: 'todos/loading'
            })

        },

        methods: {

            ...mapActions({
                addItemAction: 'todos/addItem'
            }),

            onSubmit() {
                if (this.todosLoading || this.newItem.length <= 0) {
                    return;
                }

                this.addItemAction({
                    id: this.todoItems.length++,
                    name: this.newItem,
                    state: false
                })
                    .then(() => {

                        this.newItem = '';

                    });
            }

        }

    }
</script>

<style scoped>
</style>
