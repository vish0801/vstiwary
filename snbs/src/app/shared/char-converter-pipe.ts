import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'converter',

})
export class ConverterPipe implements PipeTransform{
    transform(value: string, character: string):string {
        return value.replace(character,' ');
    }

}