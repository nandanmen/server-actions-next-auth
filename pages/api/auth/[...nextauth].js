import NextAuth from "next-auth/next";
import OktaProvider from "next-auth/providers/okta";

const OKTA_CLIENT_ID = process.env.OKTA_CLIENT_ID;
const OKTA_CLIENT_SECRET = process.env.OKTA_CLIENT_SECRET;
const OKTA_ORG_URL = process.env.OKTA_ORG_URL;

const options = {
  providers: [
    OktaProvider({
      clientId: OKTA_CLIENT_ID,
      clientSecret: OKTA_CLIENT_SECRET,
      issuer: OKTA_ORG_URL,
    }),
  ],
};

export default NextAuth(options);
