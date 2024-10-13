import { TelegramGetUpdate } from "@/lib/db/type";

export async function fetchTelegramUpdates(token: string): Promise<TelegramGetUpdate> {
    const response = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);

    // Ensure the response is okay
    if (!response.ok) {
        throw new Error(`Error fetching updates: ${response.statusText}`);
    }

    // Parse the JSON response and assert the type
    const data: TelegramGetUpdate = await response.json();
    return data;
}
