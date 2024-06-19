import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  lastNotificationTime?: Date | null;
  notificationInterval?: number | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
