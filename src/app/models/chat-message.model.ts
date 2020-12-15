export class ChatMessage {
    $key?: string;
    message?: string;
    timeSent?: Date = new Date();
    email?: string;
    userName?: string;
}