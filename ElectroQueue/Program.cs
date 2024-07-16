﻿using QueueSystem;

Queue queue1 = new Queue();
queue1.messanger += Print;


Client client1 = new Client("Bobby", "doShiet");
Client client2 = new Client("Zhora", "doShiet");
queue1.AddClient(client2);
queue1.AddClient(client1);
queue1.RemoveClient();
queue1.getClients();




static void Print(string message) {
  Console.WriteLine(message);
}