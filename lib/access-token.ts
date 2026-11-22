const TOKEN_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

function encodeBase64Url(bytes: Uint8Array) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/=/g, "").replaceAll("+", "-").replaceAll("/", "_");
}

function decodeBase64Url(value: string) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

async function signIssuedAt(issuedAt: string) {
  const secret = process.env.SITE_GATE_SECRET;
  if (!secret) throw new Error("Password gate signing secret is not configured.");

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(issuedAt));
  return encodeBase64Url(new Uint8Array(signature));
}

function constantTimeEqual(left: Uint8Array, right: Uint8Array) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) difference |= left[index] ^ right[index];
  return difference === 0;
}

export async function createAccessToken() {
  const issuedAt = Math.floor(Date.now() / 1000).toString();
  return `${issuedAt}.${await signIssuedAt(issuedAt)}`;
}

export async function hasValidAccessToken(token?: string) {
  if (!token) return false;
  const [issuedAt, providedSignature, extra] = token.split(".");
  if (!issuedAt || !providedSignature || extra !== undefined || !Array.from(issuedAt).every((char) => char >= "0" && char <= "9")) return false;

  const issuedAtSeconds = Number(issuedAt);
  const now = Math.floor(Date.now() / 1000);
  if (issuedAtSeconds > now + 60 || now - issuedAtSeconds > TOKEN_MAX_AGE_SECONDS) return false;

  try {
    const expectedSignature = await signIssuedAt(issuedAt);
    return constantTimeEqual(decodeBase64Url(providedSignature), decodeBase64Url(expectedSignature));
  } catch {
    return false;
  }
}
