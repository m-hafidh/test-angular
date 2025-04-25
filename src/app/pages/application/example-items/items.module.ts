import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsService } from './items.service';
@NgModule({
imports: [CommonModule, ItemsRoutingModule],
//declarations: [ItemsComponent],
//exports: [ItemsComponent],
providers: [ItemsService]
})
export class ItemsModule {}