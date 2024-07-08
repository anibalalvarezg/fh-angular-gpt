import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  TextMessageEvent,
  TextMessageBoxEvent,
  ChatMessageComponent,
  MyMessageComponent,
  TypingLoaderComponent,
  TextMessageBoxComponent,
} from '@components/index';
import { Message } from 'app/interfaces';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-chat-template',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
  ],
  templateUrl: './chatTemplate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatTemplateComponent {
  messages = signal<Message[]>([]);
  isLoading = signal(false);
  openAiService = inject(OpenAiService);

  handleMessage(prompt: string) {
    console.log({ prompt });
  }

  handleMessageWithFile(event: TextMessageEvent) {
    console.log({ event });
  }

  handleMessageWithSelect(event: TextMessageBoxEvent) {
    console.log({ event });
  }
}
