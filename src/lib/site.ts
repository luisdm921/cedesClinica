export const SITE_URL = "https://cedesclinica.com.mx";
export const WHATSAPP_NUMBER = "528114110318";

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
