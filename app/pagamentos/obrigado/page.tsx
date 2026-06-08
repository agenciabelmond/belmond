'use client'

import { useEffect, useState } from 'react'

const loadingMessages = [
  {
    title: 'Formulário em construção...',
    description: 'Isso pode levar alguns segundos.',
  },
  {
    title: 'Preparando as perguntas...',
    description: 'Estamos organizando o formulário personalizado da clínica.',
  },
  {
    title: 'Conferindo o nome da clínica...',
    description: 'Verifique se o nome foi preenchido corretamente.',
  },
  {
    title: 'Ajustando os detalhes finais...',
    description: 'Estamos preparando tudo com o nome da clínica informado.',
  },
  {
    title: 'Formulário quase pronto...',
    description: 'Não feche esta página. Você será redirecionado automaticamente.',
  },
]

export default function ObrigadoPage() {
  const [clinicName, setClinicName] = useState('')
  const [loading, setLoading] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    if (!loading) {
      setMessageIndex(0)
      return
    }

    const interval = setInterval(() => {
      setMessageIndex((currentIndex) => {
        if (currentIndex === loadingMessages.length - 1) return currentIndex
        return currentIndex + 1
      })
    }, 2300)

    return () => clearInterval(interval)
  }, [loading])

  async function handleCreateForm() {
    if (!clinicName.trim()) {
      alert('Digite o nome da clínica')
      return
    }

    try {
      setLoading(true)

      const response = await fetch('/api/create-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clinicName: clinicName.trim() }),
      })

      const text = await response.text()
      const data = JSON.parse(text)

      if (!response.ok || !data.success) {
        alert(data.error || 'Erro ao criar formulário')
        return
      }

      const url = data.publicUrl || data.editUrl

      if (!url) {
        alert('Formulário criado, mas nenhuma URL foi retornada.')
        return
      }

      window.location.href = url
    } catch (error) {
      console.error(error)
      alert('Erro ao criar formulário')
    } finally {
      setLoading(false)
    }
  }

  const currentMessage = loadingMessages[messageIndex]

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg,#0c0b07 0%,#1f1b10 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 20px',
        color: '#fafaf9',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '860px',
          background: '#0c0b07',
          borderRadius: '28px',
          overflow: 'hidden',
          boxShadow: '0 25px 80px rgba(0,0,0,.6)',
          border: '1px solid #363a38',
        }}
      >
        {/* HEADER */}
        <div
          style={{
            background: '#0c0b07',
            padding: '40px 30px',
            borderBottom: '1px solid #363a38',
          }}
        >
          <img
            src="/logo.png"
            alt="Belmond"
            style={{
              width: '100%',
              maxWidth: '430px',
              display: 'block',
              margin: '0 auto',
              objectFit: 'contain',
              filter: 'brightness(1.1)',
            }}
          />
        </div>

        {/* PROGRESS */}
        <div
          style={{
            padding: '20px 32px',
            background: '#1f1b10',
            borderBottom: '1px solid #363a38',
          }}
        >
          <div
            style={{
              height: '5px',
              borderRadius: '999px',
              background: '#363a38',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg,#d9b054,#bfa045)',
              }}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ padding: '40px' }}>
          {/* SUCCESS */}
          <div style={{ textAlign: 'center', marginBottom: '35px' }}>
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '999px',
                margin: '0 auto 18px',
                background: '#1f1b10',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 0 1px #363a38',
              }}
            >
              <div
                style={{
                  width: '26px',
                  height: '13px',
                  borderLeft: '3px solid #d9b054',
                  borderBottom: '3px solid #d9b054',
                  transform: 'rotate(-45deg)',
                  marginTop: '-3px',
                }}
              />
            </div>

            <h2
              style={{
                color: '#fafaf9',
                fontSize: '30px',
                fontWeight: 400,
                marginBottom: '10px',
                fontFamily: 'Georgia, serif',
              }}
            >
              Pagamento confirmado
            </h2>

            <p style={{ color: '#bdb5a1', fontSize: '16px', margin: 0 }}>
              Seu acesso foi liberado com sucesso.
            </p>
          </div>

          {/* WHATSAPP */}
          <div
            style={{
              background: '#1f1b10',
              border: '1px solid #363a38',
              borderRadius: '22px',
              padding: '28px',
              marginBottom: '20px',
              boxShadow: '0 10px 40px rgba(0,0,0,.4)',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                color: '#fafaf9',
                marginBottom: '12px',
                fontWeight: 400,
                fontFamily: 'Georgia, serif',
              }}
            >
              Envie seu comprovante
            </h3>

            <div
              style={{
                width: '50px',
                height: '2px',
                background: '#d9b054',
                marginBottom: '16px',
              }}
            />

            <p
              style={{
                color: '#bdb5a1',
                lineHeight: 1.7,
                marginBottom: '22px',
              }}
            >
              Envie o comprovante de pagamento para o WhatsApp abaixo.
            </p>

            <a
              href="https://wa.me/5553999999999"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                textDecoration: 'none',
                background: 'linear-gradient(135deg,#0c0b07,#1f1b10)',
                color: '#d9b054',
                padding: '14px 24px',
                borderRadius: '14px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '.05em',
                textTransform: 'uppercase',
                border: '1px solid #363a38',
              }}
            >
              Enviar comprovante
            </a>
          </div>

          {/* FORM */}
          <div
            style={{
              background: '#1f1b10',
              border: '1px solid #363a38',
              borderRadius: '22px',
              padding: '28px',
              boxShadow: '0 10px 40px rgba(0,0,0,.4)',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                color: '#fafaf9',
                marginBottom: '12px',
                fontWeight: 400,
                fontFamily: 'Georgia, serif',
              }}
            >
              Criar formulário da clínica
            </h3>

            <div
              style={{
                width: '50px',
                height: '2px',
                background: '#d9b054',
                marginBottom: '16px',
              }}
            />

            <p
              style={{
                color: '#bdb5a1',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              Digite o nome da clínica abaixo para gerar seu formulário personalizado.
            </p>

        <input
  type="text"
  placeholder="Nome da clínica"
  value={clinicName}
  onChange={(e) => setClinicName(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (!loading) {
        handleCreateForm()
      }
    }
  }}
  disabled={loading}
  style={{
    width: '100%',
    padding: '16px',
    borderRadius: '14px',
    border: '1px solid #363a38',
    background: '#0c0b07',
    color: '#fafaf9',
    fontSize: '16px',
    marginBottom: '16px',
    outline: 'none',
  }}
/>

            <button
              onClick={handleCreateForm}
              disabled={loading}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '14px',
                border: '1px solid #363a38',
                background: 'linear-gradient(135deg,#d9b054,#bfa045)',
                color: '#0c0b07',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? 'Gerando formulário...' : 'Criar formulário'}
            </button>

            {loading && (
              <div
                style={{
                  marginTop: '18px',
                  padding: '22px',
                  borderRadius: '20px',
                  background: '#0c0b07',
                  border: '1px solid #363a38',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '999px',
                    border: '3px solid #363a38',
                    borderTop: '3px solid #d9b054',
                    margin: '0 auto 14px',
                    animation: 'spin 0.9s linear infinite',
                  }}
                />

                <p style={{ margin: 0, color: '#fafaf9', fontSize: '16px' }}>
                  {currentMessage.title}
                </p>

                <p style={{ margin: '7px 0 0', color: '#bdb5a1', fontSize: '14px' }}>
                  {currentMessage.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}