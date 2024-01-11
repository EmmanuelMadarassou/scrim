import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChatViewComponent } from './components/chat-view'
import { MessageListComponent } from './components/message-list'
import { MessagePreviewComponent } from './components/message-preview'
import { MessageComponent } from './message.component'

@NgModule({
	declarations: [MessageComponent, ChatViewComponent, MessageListComponent, MessagePreviewComponent],
	imports: [BrowserModule],
	providers: [],
	exports: [MessageComponent],
})
export class MessageModule {}
