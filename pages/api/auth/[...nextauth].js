import NextAuth from "next-auth"
import Facebook from "next-auth/providers/facebook"
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Facebook({
            // clientId: process.env.FACEBOOK_CLIENT_ID,
            clientId: '735343300994110',
            // clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            clientSecret: '7f21216103bdc6e8a7c58f6595f48426',
        }),
        // ...add more providers here
    ],
})
