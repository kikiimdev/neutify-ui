import _QRCodeStyling, { type Options } from "qr-code-styling"

const QRCodeStyling = ((_QRCodeStyling as any)?.default as typeof _QRCodeStyling) ?? _QRCodeStyling

export default defineNuxtPlugin((nuxtApp) => {
  let qrCodeStyling: _QRCodeStyling
  return {
    provide: {
      // Provide a helper that returns an instance of QRCodeStyling
      qrCodeStyling: (options: Partial<Options>): _QRCodeStyling => {
        if (qrCodeStyling) return qrCodeStyling
        qrCodeStyling = new QRCodeStyling(options)
        return qrCodeStyling
      },
      // Provide here other helpers you may need
      // ...
    },
  }
})
