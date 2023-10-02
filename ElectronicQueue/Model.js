class Model {
  constructor(value) {
this.value = value
  }

  getObject(id) {
    return this.value[id]
    }

  pushObject(obj) {
  clients.push(obj)
  }

  removeObject(id) {
    clients.splice(id, 1)
    let view = new View()
    view.displayClient('update', 'remove')
  }

  updateObject(id, data) {
    let obj = this.getObject(id)
    Object.keys(data).forEach(prop => obj[prop] = data[prop])
  }
  

   }


   


