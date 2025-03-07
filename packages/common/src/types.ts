import { z } from "zod";

export const CreateUserSchema = z.object({
  username: z.string().min(3).max(255),
  password: z.string().min(6).max(255),
  name: z.string().min(3).max(255),
});

export const SigninSchema = z.object({
  username: z.string().min(3).max(255),
  password: z.string().min(6).max(255),
});

export const CreateRoomSchema = z.object({
  name: z.string().min(3).max(255),
});
