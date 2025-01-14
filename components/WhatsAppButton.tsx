
import WhatsAppIcon from './icons/whatsapp-icon'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
    >
      
      <WhatsAppIcon className={"fill-white h-10 w-10"} />
    </a>
  )
}

