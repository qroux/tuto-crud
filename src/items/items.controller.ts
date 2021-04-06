import { Controller, Get, Param } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Item {
    return this.itemsService.findOne(id);
  }

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }
}
