import { Injectable } from '@angular/core';
import { ExportedItem, Item, ItemSectionParserService, Section } from '@shared/module/poe/type';
import { ClientStringService } from '../../client-string/client-string.service';

@Injectable({
    providedIn: 'root'
})
export class ItemSectionItemLevelParserService implements ItemSectionParserService {
    constructor(private readonly clientString: ClientStringService) { }

    public optional = true;

    public parse(item: ExportedItem, target: Item): Section {
        const phrase = `${this.clientString.translate('ItemDisplayStringItemLevel')}: `;

        const itemLevelSection = item.sections.find(x => x.content.indexOf(phrase) === 0);
        if (!itemLevelSection) {
            return null;
        }

        target.level = +itemLevelSection.lines[0].slice(phrase.length);
        return itemLevelSection;
    }
}
