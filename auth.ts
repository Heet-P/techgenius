import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null
                }

                const username = credentials.username as string
                const password = credentials.password as string

                // Check against environment variables
                const adminUsername = process.env.ADMIN_USERNAME
                const adminPassword = process.env.ADMIN_PASSWORD

                if (!adminUsername || !adminPassword) {
                    console.error('Admin credentials not configured')
                    return null
                }

                // Verify username
                if (username !== adminUsername) {
                    return null
                }

                // Check if password is already hashed (starts with $2)
                let isValid = false
                if (adminPassword.startsWith('$2')) {
                    // Password is already hashed, compare directly
                    isValid = await bcrypt.compare(password, adminPassword)
                } else {
                    // Plain text password (for initial setup), compare directly
                    isValid = password === adminPassword

                    // Log warning to hash the password
                    console.warn('⚠️  Admin password is not hashed. Please hash it and update .env.local')
                    console.warn('Run: node -e "const bcrypt = require(\'bcryptjs\'); console.log(bcrypt.hashSync(\'YOUR_PASSWORD\', 10))"')
                }

                if (!isValid) {
                    return null
                }

                // Return user object
                return {
                    id: "admin",
                    name: "Admin",
                    email: "admin@techgenius.com",
                }
            }
        })
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
            }
            return session
        }
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
})
