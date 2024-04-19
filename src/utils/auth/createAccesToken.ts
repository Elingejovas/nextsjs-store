import { GraphQLClientSingleton } from "app/graphql";
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccesTokenCreate";
import { cookies } from "next/headers";

export const createAccessToken = async (email, password) => {
    const cookiesStore = cookies();
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
    try {
        const { customerAccessTokenCreate } = await graphqlClient.request(customerAccessTokenCreateMutation, {
            email: email,
            password: password
        });
        const { accessToken, expiresAt } = customerAccessTokenCreate?.customerAccessToken;
        if (accessToken) {
            cookiesStore.set("accessToken", accessToken, {
                path: "/",
                expires: new Date(expiresAt),
                httpOnly: true,
                sameSite: "strict"
            });
            return accessToken;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};
