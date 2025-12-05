import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'upperCasePipe',
    standalone: true,
})
export class UpperCasePipe{
    transform(value: string) {
        return value.toUpperCase();
    }
}