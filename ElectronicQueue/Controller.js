class Controller {
  constructor(value) {
this.value = value
  }
  
displayClient(obj) {
  let model = new Model()
  model.pushObject(obj)
}


removeObject(id) {
  let model = new Model()
  setTimeout(() => {
    model.removeObject(id)
  }, 5000)
}



   }