import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch(
      'https://api.checkout.infinitepay.io/links',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          handle: 'agenciabelmond',

          redirect_url:
            'https://www.agenciabelmond.com.br/pagamentos/obrigado',

          order_nsu: `pedido-${Date.now()}`,

          items: [
            {
              quantity: 1,
              price: 159400, // R$ 1.594,00
              description: 'Treinamento Premium Belmond',
              digital: true,
            },
          ],
        }),
      }
    )

    const data = await response.json()

    console.log('STATUS:', response.status)
    console.log('DATA:', data)

    if (!response.ok) {
      return NextResponse.json(
        {
          error: 'Erro ao criar checkout',
          status: response.status,
          data,
        },
        { status: response.status }
      )
    }

    if (!data?.url) {
      return NextResponse.json(
        {
          error: 'A InfinitePay não retornou a URL do checkout',
          data,
        },
        { status: 400 }
      )
    }

    return NextResponse.redirect(data.url)
  } catch (error) {
    console.error('ERRO:', error)

    return NextResponse.json(
      {
        error: 'Erro interno',
      },
      { status: 500 }
    )
  }
}