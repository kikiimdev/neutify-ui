import * as _QRCodeStyling from "qr-code-styling"
import type { Options } from "qr-code-styling"

const QRCodeStyling = _QRCodeStyling?.default || _QRCodeStyling

export default defineNuxtPlugin((nuxtApp) => {
  let qrCodeStyling: any
  return {
    provide: {
      // Provide a helper that returns an instance of QRCodeStyling
      qrCodeStyling: (options: Partial<Options>) => {
        if (qrCodeStyling) return qrCodeStyling
        qrCodeStyling = new QRCodeStyling(options)
        return qrCodeStyling
      },
      // Provide here other helpers you may need
      // ...
    },
  }
})
