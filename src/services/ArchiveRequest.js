const BaseURL = "https://frontend-test-api.aircall.io";

export async function ArchiveRequest(call) {
  return await fetch(`${BaseURL}/calls/${call.id}/archive`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: call.is_archived,
  }).then((res) => res.json());
}
