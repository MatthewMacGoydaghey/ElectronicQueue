using System.Text.Json;
using System.Text.Json.Nodes;
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
  private static int counter = 0;
  private static int Counter{get {return counter;} set {counter += value;}}

  public delegate void Messanger (object clients);
  public event Messanger? messanger;
  public Client[] clients = new Client[30];

 private Client this[int index] {
  get {return clients[index];}
  set {clients[index] = value;}
 }

 public void AddClient(Client client) {
  this[counter] = client;
  Counter = 1;
 }


 public void getClients() {
  foreach (Client? client in clients) {
    if (client is not null) {
    Console.WriteLine(JsonConvert.SerializeObject(client));
    }
  }
 }
}

}