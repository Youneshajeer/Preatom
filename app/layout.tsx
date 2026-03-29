import './globals.css'
import { Metadata } from 'next'

// تعريف البيانات لموقع Preatom
export const metadata: Metadata = {
  title: 'Preatom.com | Strategic Asset Acquisition',
  description: 'The fundamental identity for pre-compute logic and atomic-scale intelligence. Available for strategic brand acquisition.',
  metadataBase: new URL('https://preatom.com'),
  
  // لضمان ظهور الموقع بشكل احترافي عند البحث
  keywords: ['Preatom', 'Premium Domain', 'Deep Tech Brand', 'AI Infrastructure', 'Atomic Computing'],
  authors: [{ name: 'Preatom Labs' }],

  openGraph: {
    title: 'Preatom.com | Next-Gen Infrastructure Brand',
    description: 'A high-value digital asset designed for the future of atomic-scale computing. Available for purchase.',
    url: 'https://preatom.com',
    siteName: 'Preatom',
    images: [
      {
        url: '/og-preatom.png', // تأكد من تصميم صورة باللون البنفسجي الفخم ووضعها في public
        width: 1200,
        height: 630,
        alt: 'Preatom.com - Premium Technology Brand',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Preatom.com | Available for Acquisition',
    description: 'Secure the core identity of your next tech venture. Preatom.com is for sale.',
    images: ['/og-preatom.png'],
  },

  // لإخفاء الموقع من بعض أدوات الكراولينج غير المرغوبة (اختياري)
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased selection:bg-purple-500/30">
        {children}
      </body>
    </html>
  )
}