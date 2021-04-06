import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
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

  @Post()
  create(@Body() newItem: CreateItemDto): Item {
    return this.itemsService.create(newItem);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() newProperties: CreateItemDto): Item {
    return this.itemsService.update(id, newProperties);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Item {
    return this.itemsService.delete(id);
  }
}
