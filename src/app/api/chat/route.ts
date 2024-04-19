import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Crear un cliente de API de OpenAI (¡amigable con el borde!)
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

// ¡IMPORTANTE! Establecer el tiempo de ejecución en borde
export const runtime = 'edge';

export async function POST(req: Request) {
  // Extraer los `messages` del cuerpo de la solicitud
  const { messages } = await req.json();

  // Solicitar a OpenAI una finalización de chat en streaming dada la indicación
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });
  // Convertir la respuesta en un flujo de texto amigable
  const stream = OpenAIStream(response);
  // Responder con el flujo
  return new StreamingTextResponse(stream);
}
