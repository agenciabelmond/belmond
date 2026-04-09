export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
          Política de Privacidade – Belmond
        </h1>

        <p className="text-white/70 mb-10 leading-relaxed">
          A Belmond atua com serviços de marketing digital e respeita a sua
          privacidade. Esta Política de Privacidade explica como coletamos,
          usamos e protegemos suas informações pessoais.
        </p>

        {/* SEÇÃO 1 */}
        <h2 className="text-xl font-medium mb-3">
          1. Coleta de informações
        </h2>
        <p className="text-white/70 mb-6 leading-relaxed">
          Coletamos informações fornecidas diretamente por você, como nome,
          e-mail, telefone e dados enviados através de formulários, WhatsApp
          ou landing pages.
        </p>

        {/* SEÇÃO 2 */}
        <h2 className="text-xl font-medium mb-3">
          2. Uso das informações
        </h2>
        <p className="text-white/70 mb-6 leading-relaxed">
          Utilizamos seus dados para entrar em contato, oferecer serviços,
          melhorar sua experiência e realizar ações de marketing digital e
          comunicação comercial.
        </p>

        {/* SEÇÃO 3 */}
        <h2 className="text-xl font-medium mb-3">
          3. Compartilhamento de dados
        </h2>
        <p className="text-white/70 mb-6 leading-relaxed">
          Não vendemos ou compartilhamos seus dados pessoais com terceiros,
          exceto quando necessário para execução dos serviços contratados ou
          obrigações legais.
        </p>

        {/* SEÇÃO 4 */}
        <h2 className="text-xl font-medium mb-3">
          4. Armazenamento e segurança
        </h2>
        <p className="text-white/70 mb-6 leading-relaxed">
          Adotamos medidas técnicas e organizacionais para proteger seus dados
          contra acesso não autorizado, perda, alteração ou divulgação indevida.
        </p>

        {/* SEÇÃO 5 */}
        <h2 className="text-xl font-medium mb-3">
          5. Cookies e navegação
        </h2>
        <p className="text-white/70 mb-6 leading-relaxed">
          Podemos utilizar cookies para melhorar a navegação, analisar tráfego
          e personalizar conteúdos de acordo com seu interesse.
        </p>

        {/* SEÇÃO 6 */}
        <h2 className="text-xl font-medium mb-3">
          6. Direitos do usuário (LGPD)
        </h2>
        <p className="text-white/70 mb-6 leading-relaxed">
          Você pode solicitar acesso, correção ou exclusão dos seus dados a
          qualquer momento, conforme previsto pela Lei Geral de Proteção de Dados (LGPD).
        </p>

        {/* SEÇÃO 7 */}
        <h2 className="text-xl font-medium mb-3">
          7. Contato
        </h2>
        <p className="text-white/70 leading-relaxed">
          Em caso de dúvidas sobre esta Política de Privacidade, entre em contato
          com a equipe da Belmond através dos nossos canais oficiais.
        </p>

        {/* VOLTAR */}
        <div className="mt-14 flex flex-col items-start gap-4">

          {/* lista sutil */}
          <ul className="text-white/40 text-xs space-y-1">
            <li>• Navegação segura</li>
            <li>• Política transparente</li>
            <li>• Proteção de dados conforme LGPD</li>
          </ul>

          {/* botão voltar */}
          <a
            href="/"
            className="inline-flex items-center justify-center px-5 py-2 text-sm border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition rounded-md"
          >
            ← Voltar para a página inicial
          </a>
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-10 border-t border-white/10 pt-6 text-white/50 text-sm">
          Última atualização: {new Date().getFullYear()}
        </div>

      </div>
    </div>
  )
}