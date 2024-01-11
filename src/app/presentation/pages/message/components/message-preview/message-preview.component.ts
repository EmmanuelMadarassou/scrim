import { Component } from '@angular/core'

@Component({
	selector: 'message-preview',
	templateUrl: './message-preview.component.html',
	styleUrls: ['./message-preview.component.scss'],
})
export class MessagePreviewComponent {
	messageTitle: string = 'OH looks for champion team'
	messageState: string = 'Still looking'
	messageAuthor: any = 'Aeron'
	messageDate: any = '10 oct'
}
