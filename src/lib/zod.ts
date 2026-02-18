import { object, z } from "zod"
 
export const signInSchema = object({
  email: z.string({ error: "Email обязателен" })
    .min(1, "Email обязателен")
    .email("Неверный формат электронной почты"),
  password: z.string({ error: "Пароль обязателен" })
    .min(1, "Пароль обязателен")
    .min(8, "Пароль должен быть длиннее 8 символов")
    .max(32, "Пароль должен быть короче 32 символов"),
})
