import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.schema';

export const userProviders = [
  {
    provide: 'User_MODEL',
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
