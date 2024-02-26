class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(b: string, s: number, r: string, connections: string[]) {
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = connections;
  }

  turnOn(): void {
    console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} available connections: ${this._connections}`)
  }

  get connected(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(param: string | undefined) {
    if(!param || this._connections.includes(param)) {
      this._connectedTo = param;
      console.log(this._connectedTo)
    } else {
      console.log('Sorry, connection unavailable!')
    }
  }
}

const tv1 = new Tv('LG', 40, '4K', ['hdmi', 'Ethernet', 'wi-fi']);
tv1.turnOn();
tv1.connectedTo = 'hdmi'
console.log('Connected to: ', tv1.connected);