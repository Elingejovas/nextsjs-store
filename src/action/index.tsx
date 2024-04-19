'use server';
import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";
import { createAccesToken } from "app/utils/auth/createAccesToken";
import { redirect } from "next/navigation";
import { createCartMutation } from "app/graphql/mutations/createCartMutation";
import { cookies } from "next/headers";
import { validateAccesToken } from "app/utils/auth/validateAccesToken";

export const handleCreateUser = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData);
    delete formDataObject["password_confirmation"];
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

    const variables = {
        input: {
            ...formDataObject,
            phone: "+52" + formDataObject.phone
        }
    };

    const { customerCreate } = await graphqlClient.request(createUserMutation, variables);
    const { customerUserErrors, customer } = customerCreate;
    if (customer) {
        await createAccesToken(formDataObject.email as string, formDataObject.password as string);
        redirect("/store");
    }
};

export const handleLogin = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData);
    const accesToken = await createAccesToken(formDataObject.email as string, formDataObject.password as string);
    if (accesToken) {
        redirect("/store");
    }
};

export const handleCreateCart = async (items: CartItem[]) => {
    const cookiesStore = cookies();
    const accesToken = cookiesStore.get('accessToken')?.value as string;

    if (!accesToken) redirect('/login');

    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
    const customer = await validateAccesToken();
    const variables = {
        input: {
            buyerIdentity: {
                customerAccessToken: accesToken,
                email: customer?.email
            },
            lines: items.map(item => ({
                merchandiseId: item.merchandiseId,
                quantity: item.quantity
            }))
        }
    };

    const { cartCreate }: {
        cartCreate?: {
            cart?: {
                checkoutUrl: string
            }
        }
    } = await graphqlClient.request(createCartMutation, variables);

    return cartCreate?.cart?.checkoutUrl;
};
