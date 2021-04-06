import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  items = [
    {
      id: 1,
      title: 'title 1',
      done: true,
    },
    {
      id: 2,
      title: 'title 2',
      done: true,
    },
    {
      id: 3,
      title: 'title 3',
      done: true,
    },
  ];

  findOne(id): Item {
    return this.items.find((item) => item.id === Number(id));
  }

  findAll(): Item[] {
    return this.items;
  }
}
