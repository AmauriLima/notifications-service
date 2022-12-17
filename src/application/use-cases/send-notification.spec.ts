import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notificaiton', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotificaiton = new SendNotification(notificationsRepository);

    const { notification } = await sendNotificaiton.execute({
      recipientId: 'example-recipient-id',
      content: 'This is a notification',
      category: 'social',
    });

    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
