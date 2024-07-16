interface ICounter {
  private static int counter = 1;
  private static int Counter{get {return counter;} set {counter += value;}}
}