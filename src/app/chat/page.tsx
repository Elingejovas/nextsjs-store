'use client';
import { Chat } from "app/components/chat/chat";
import getProducts from "app/services/shopify";
import { createAgent } from "app/utils/openai/createAgent";

export default async function ChatPage() {
  const products = await getProducts();
  const productTitles = products.map((product: any) => product.title);
  const flatProductTitles = productTitles.join(",");
  const agent = createAgent(flatProductTitles);
  
  return (
    <>
      <Chat agent={agent} />
    </>
  );
}
