import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'rightChatsComponentTime' })
export class RightChatsComponentTime implements PipeTransform {
    transform(date: Date): string {
        var now = new Date();
        if (now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth()) {
            if (now.getDate() === date.getDate()) {
                console.log(date.getHours());
                return `${date.getHours()}:${date.getMinutes()}`;
            }
            else if (now.getDate() - date.getDate() === 1) {
                return "Dün";
            }
            else{
                return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
            }
        }
        else{
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        }
    }
}