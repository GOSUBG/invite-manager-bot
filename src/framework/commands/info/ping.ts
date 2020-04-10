import { Message } from 'eris';

import { IMClient } from '../../../client';
import { CommandGroup } from '../../../types';
import { CommandContext, IMCommand } from '../Command';

export default class extends IMCommand {
	public constructor(client: IMClient) {
		super(client, {
			name: 'ping',
			aliases: [],
			group: CommandGroup.Info,
			defaultAdminOnly: false,
			guildOnly: false
		});
	}

	public async action(message: Message, args: any[], flags: {}, context: CommandContext): Promise<any> {
		const msg = await message.channel.createMessage('Pong!').catch(() => undefined);
		if (msg) {
			msg.edit(`Pong! (${(msg.createdAt - message.createdAt).toFixed(0)}ms)`);
		}
	}
}
