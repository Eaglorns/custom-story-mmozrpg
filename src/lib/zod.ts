import { object, z } from "zod"
 
export const signInSchema = object({
  email: z.email({ error: "Неверный формат электронной почты" }),
  password: z.string({ error: "Пароль обязателен" })
    .min(1, { error: "Пароль обязателен" })
    .min(8, { error: "Пароль должен быть длиннее 8 символов" })
    .max(32, { error: "Пароль должен быть короче 32 символов" }),
})
