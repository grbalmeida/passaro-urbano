import {PipeTransform, Pipe} from '@angular/core'

@Pipe({name: 'reducedDescription'})
export class ReducedDescription implements PipeTransform {
    transform(text: string, length: number, start: number): string {
        return text.length > length
            ? `${text.substr(0, length)}...`
            : text
    }
}