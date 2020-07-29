(function() {
    //エラーチェック用
    'use strict'

    
    // two way data binding (to UI)

    var vm = new Vue({
      el: '#app',
      data: {
        newItem: '',
         todos: [{
           title: 'task 1',
           isDone: false
         }, {
           title: 'task 2',
           isDone: false
         }, {
           title: 'task 3',
           isDone: true
        }]
        //todos: []
      },
      methods: {
        // addItem: function(e) {
        //   e.preventDefault();
        //   this.todos.push(this.newItem);
        // }
        addItem: function() {
          var item = {
            title: this.newItem,
            isDone: false
          };
          this.todos.push(item);
          this.newItem = '';
        },
        deleteItem: function(index) {
          if (confirm('削除してもよろしいでしょうか?')) {
            this.todos.splice(index, 1);
          }
        }
      },
      computed: {
        remaining: function() {
          var items = this.todos.filter(function(todo) {
          return !todo.isDone;
          });
          return items.length;
        }
      }
    });
})();