import { Component } from '@angular/core'

@Component({
	selector: 'chat-view',
	templateUrl: './chat-view.component.html',
	styleUrls: ['./chat-view.component.scss'],
})
export class ChatViewComponent {
	announceAuthor: any = 'Aeron'
	announceState: any = 'Still looking'
	announceImage: any = 'assets/images/announce.jpg'
	message = {
		author: {
			isConnected: true,
		},
		content: "Hello I'm looking for a new team",
		date: '10 oct',
		state: 'Received',
	}

	sendMessage() {}
}
