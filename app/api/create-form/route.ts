import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { clinicName } = await req.json()

    // 1. Validação de entrada
    if (!clinicName) {
      return NextResponse.json(
        {
          success: false,
          error: 'Nome da clínica não informado',
        },
        { status: 400 }
      )
    }

    // 2. Validação de env
    const scriptUrl = process.env.APPS_SCRIPT_URL

    if (!scriptUrl) {
      return NextResponse.json(
        {
          success: false,
          error: 'APPS_SCRIPT_URL não configurada',
        },
        { status: 500 }
      )
    }

    // 3. Chamada para Apps Script
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clinicName }),
      cache: 'no-store',
    })

    const text = await response.text()

    console.log('STATUS APPS SCRIPT:', response.status)
    console.log('RAW RESPONSE:', text)

    // 4. Parse seguro do JSON
    let data: any
    try {
      data = JSON.parse(text)
    } catch (err) {
      return NextResponse.json(
        {
          success: false,
          error: 'Apps Script retornou JSON inválido',
          raw: text,
        },
        { status: 500 }
      )
    }

    console.log('PARSED DATA:', data)

    // 5. Se o Apps Script falhar
    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          status: response.status,
          error: data?.error || 'Erro retornado pelo Apps Script',
          data,
        },
        { status: response.status }
      )
    }

    // 6. Suporte a resposta aninhada ou direta
    const payload = data?.data ?? data

    // 7. Validação mínima do retorno esperado
    if (!payload?.formId || !payload?.editUrl || !payload?.publicUrl) {
      return NextResponse.json(
        {
          success: false,
          error: 'Apps Script não retornou URLs completas',
          received: data,
        },
        { status: 500 }
      )
    }

    // 8. Resposta final limpa
    return NextResponse.json({
      success: true,
      formId: payload.formId,
      editUrl: payload.editUrl,
      publicUrl: payload.publicUrl,
    })
  } catch (error: any) {
    console.error('ERRO COMPLETO:', error)

    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Erro interno',
      },
      { status: 500 }
    )
  }
}