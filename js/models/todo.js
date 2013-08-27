Todos.Todo = DS.Model.extend({
   title: DS.attr('string'),
   isCompleted: DS.attr('boolean')
});

// Todos.Todo = ParseModel.extend({
//    title: DS.attr('string'),
//    isCompleted: DS.attr('boolean')
// });

// Todos.Todo.FIXTURES = [
//  {
//    id: 1,
//    title: 'Deposit check',
//    isCompleted: true
//  }, 
//  {
//    id: 2,
//    title: 'Woodchips',
//    isCompleted: true
//  },
//  {
//    id: 3,
//    title: 'Weed wacker',
//    isCompleted: false
//  },
//  {
//    id: 4,
//    title: 'Dog Park',
//    isCompleted: true
//  },
// {
//    id: 5,
//    title: 'Coffeeshop',
//    isCompleted: false
//  },
// {
//    id: 6,
//    title: 'Clean',
//    isCompleted: false
//  },
// {
//    id: 7,
//    title: 'Groceries',
//    isCompleted: false
//  },
//  {
//    id: 8,
//    title: 'Grant Park Fest',
//    isCompleted: true
//  },
//   {
//    id: 9,
//    title: 'Perimeter Mall',
//    isCompleted: false
//  }
// ];