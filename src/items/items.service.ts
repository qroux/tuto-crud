import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { CreateItemDto } from './dto/create-item.dto';

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

  create(newItem: CreateItemDto): Item {
    const item = { ...newItem, id: this.items.length + 1 };
    this.items = [...this.items, item];

    return item;
  }

  update(id: string, newProperties: CreateItemDto): Item {
    let itemToUpdate = this.items.find((i) => i.id === Number(id));
    const updatedItem = { ...itemToUpdate, ...newProperties };
    this.items = this.items.map((i) => (i.id !== Number(id) ? i : updatedItem));

    return updatedItem;
  }

  delete(id: string): Item {
    const itemToDelete = this.items.find((i) => i.id === Number(id));
    this.items = this.items.filter((i) => i.id !== Number(id));

    return itemToDelete;
  }
}
