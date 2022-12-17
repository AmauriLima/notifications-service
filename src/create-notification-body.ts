import { Notification } from '@prisma/client';
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

type CreateNotificationBodyProps = Pick<
  Notification,
  'content' | 'category' | 'recipientId'
>;

export class CreateNotificationBody implements CreateNotificationBodyProps {
  @IsNotEmpty()
  @IsUUID()
  content: string;

  @IsNotEmpty()
  @Length(5, 240)
  category: string;

  @IsNotEmpty()
  recipientId: string;
}
