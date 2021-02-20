<template>

    <div class="flex items-center py-3">
        <div class="flex items-center mr-auto w-full">
            <div class="flex-1">
                <label for="checkBox"
                       class="bg-white border-2 rounded-full border-gray-200 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-4 focus-within:border-blue-300">
                    <input
                        @click="completeItem"
                        class="opacity-0 absolute cursor-pointer w-8 h-8"
                        id="checkBox"
                    />
                    <svg
                        v-show="item.state"
                        class="fill-current w-4 h-4 text-blue-500"
                        viewBox="0 0 20 20">
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/>
                    </svg>
                </label>
            </div>
            <div class="w-full">
                <div v-if="!editing" class="text-left">
                    {{ item.name }}
                </div>
                <div v-else>
                    <input
                        type="text"
                        v-model="localItem.name"
                        class="outline-none border-b-2 border-fuchsia-600 w-11/12"
                    />
                </div>
                <!-- {{ todoItemIndex }}{{ todoItem }} -->
            </div>
        </div>

        <div class="flex items-center">
            <button
                v-if="editing"
                @click="saveItem()"
                :disabled="todosLoading"
                class="mr-3 bg-yellow-300 rounded h-8 w-8 flex items-center justify-center">
                <i class="material-icons text-white">save</i>
            </button>
            <button
                v-if="!editing"
                @click="editItem(itemIndex)"
                class="mr-3 bg-blue-300 rounded h-8 w-8 flex items-center justify-center">
                <i class="material-icons text-white">edit</i>
            </button>
            <button
                @click="removeItem(item)"
                class="bg-gray-300 rounded h-8 w-8 flex items-center justify-center">
                <i class="material-icons text-white">clear</i>
            </button>
        </div>
    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

    name: 'Form',

    created() {
        this.localItem = Object.assign({}, this.item);
    },

    data() {
        return {
            editing: false,
            localItem: {}
        }
    },

    props: {

        item: {
            required: true,
            type: Object
        },

        itemIndex: {
            required: true,
            type: Number
        }

    },

    computed: {

        ...mapGetters({
            todosLoading: 'todos/loading'
        })

    },

    methods: {

        ...mapActions({
            removeItemAction: 'todos/removeItem',
            updateItemAction: 'todos/updateItem'
        }),

        saveItem() {
            this.updateItemAction(this.localItem);
            this.editing = false;
        },

        completeItem() {
            this.localItem.state = !this.localItem.state;
            this.saveItem();
        },

        editItem() {
            this.editing = true;
        },

        removeItem: function (item) {
            this.removeItemAction(item);
        }

    }

}
</script>

<style scoped>
</style>
