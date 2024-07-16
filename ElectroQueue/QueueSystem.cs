using Newtonsoft.Json;

namespace QueueSystem {

  public class Client {
  private static int counter = 1;
  private static int Counter{get {return counter;} set {counter += value;}}
  public int id = counter;
  public string name;
  public string opType;

  public Client(string name, string opType) {
    this.name = name;
    this.opType = opType;
    Counter = 1;
  }
}


public class Queue {

  public delegate void Messanger (string message);
  public event Messanger? messanger;
  public List<Client> clients = [];

 private Client this[int index] {
  get {return clients[index];}
  set {clients[index] = value;}
 }

 public void AddClient(Client client) {
  clients.Add(client);
  messanger?.Invoke($"Client added: {JsonConvert.SerializeObject(client)}");
 }


 public void RemoveClient() {
  Client client = clients[0];
  clients.Remove(client);
 }


 public List<Client> getClients() {
  return clients;
 }
}

}