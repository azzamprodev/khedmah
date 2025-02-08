"use server";
import { createClient } from "@/utils/supabase/server";

export async function createTransaction(clientData, serviceId) {
  const supabase = await createClient();

  const { data: existingClient } = await supabase
    .from("clients")
    .select("*")
    .eq("email", clientData.email)
    .single();

  let clientId;

  if (!existingClient) {
    const { data: client, error: clientError } = await supabase
      .from("clients")
      .insert([clientData])
      .select()
      .single();

    if (clientError || !client) {
      return {
        success: false,
        message: "Client cannot be saved to database",
        error: clientError,
      };
    }

    clientId = client.id;
  } else {
    clientId = existingClient.id;
  }

  const transactionData = {
    service_id: serviceId,
    client_id: clientId,
    status: "pending",
  };

  const { error: transactionError } = await supabase
    .from("transactions")
    .insert([transactionData]);

  if (transactionError) {
    // Only delete the client if they were newly created
    if (!existingClient) {
      await supabase.from("clients").delete().match({ id: clientId });
    }
    return {
      success: false,
      message: "Transaction didn't save to database",
      error: transactionError,
    };
  }

  return {
    success: true,
    message: "Transaction was saved to database",
  };
}
