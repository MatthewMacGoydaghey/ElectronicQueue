using QueueSystem;

Queue queue1 = new Queue();


Client client1 = new Client("Bobby", "doShiet");
Client client2 = new Client("Zhora", "doShiet");
queue1.AddClient(client2);
queue1.AddClient(client1);
queue1.getClients();


