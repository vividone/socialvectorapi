class MetaData {
  metas: keyPairs[];
}

class keyPairs {
  key: string;
  value: string;
}

export class Order {
  id: number;
  meta_data: MetaData;
}
