import { z } from 'zod'

const passwordValidation = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/

)

export const registerSchema = z.object({
    email: z.email(),
    password: z.string().regex(passwordValidation, {
        message: 'Password must contain 1 lowercase character, 1 uppercase character, 1 number, 1 special character and be 6-10 characters.'
    })
})

export type RegisterSchema = z.infer<typeof registerSchema>