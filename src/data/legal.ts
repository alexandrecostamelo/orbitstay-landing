// Conteúdo das páginas institucionais de compliance (segurança, termos, privacidade).
// Centralizado aqui para facilitar a revisão jurídica — as páginas .astro apenas
// renderizam estes dados.
//
// DRAFT: revisar com advogado antes do launch. Os textos de /termos e /privacidade
// são rascunhos e contêm placeholders [INSERIR ...] a serem preenchidos.

/** Data da última revisão, exibida no rodapé das páginas. */
export const LAST_UPDATED = '22 de maio de 2026';

/** Canal único de contato para assuntos de dados pessoais (LGPD). */
export const PRIVACY_EMAIL = 'privacidade@orbitstay.com.br';

/** Seção simples: título + lista de afirmações. Usada na página de Segurança. */
export interface SecuritySection {
  heading: string;
  items: string[];
}

export const SECURITY_SECTIONS: SecuritySection[] = [
  {
    heading: 'Seus dados de pagamento',
    items: [
      'Os dados de cartão de crédito dos seus hóspedes nunca passam pelos nossos servidores.',
      'Utilizamos tokenização via Pagar.me (certificado PCI DSS Nível 1). O número do cartão é processado diretamente no ambiente seguro da Pagar.me e substituído por um token descartável.',
      'Aceitamos cartão de crédito, PIX e boleto — todos processados pelo gateway certificado.',
    ],
  },
  {
    heading: 'Isolamento de dados',
    items: [
      'Cada hotel tem seus dados completamente isolados dos demais.',
      'Utilizamos Row Level Security (RLS) em todas as tabelas do banco de dados, garantindo que nenhum hotel acesse informações de outro, mesmo em caso de falha de aplicação.',
      'Sua equipe só vê os dados do seu hotel. Sempre.',
    ],
  },
  {
    heading: 'Criptografia',
    items: [
      'Todas as comunicações são protegidas por HTTPS/TLS.',
      'Dados sensíveis como códigos de acesso de funcionários são criptografados com AES-256-GCM antes de serem armazenados.',
      'Links de pré-checkin usam tokens criptográficos de 256 bits com validade limitada.',
    ],
  },
  {
    heading: 'LGPD (Lei Geral de Proteção de Dados)',
    items: [
      'O ORBITstay foi construído com a LGPD em mente desde o primeiro dia.',
      'Direito ao esquecimento: endpoint dedicado para anonimização completa dos dados pessoais de qualquer hóspede.',
      'Retenção configurável: dados de FNRH são automaticamente removidos após o prazo definido pelo hotel.',
      'Redação de PII: dados pessoais são mascarados em logs e relatórios internos.',
      `Para exercer seus direitos como titular de dados, entre em contato: ${PRIVACY_EMAIL}`,
    ],
  },
  {
    heading: 'Infraestrutura',
    items: [
      'Banco de dados hospedado na AWS São Paulo (sa-east-1) via Supabase, com backups diários automáticos.',
      'Aplicação distribuída em edge global via Vercel e Cloudflare Workers.',
      'Monitoramento contínuo com health checks automáticos a cada hora.',
      'Rate limiting em todos os endpoints públicos para proteção contra ataques.',
    ],
  },
];

/** Itens da seção "Conformidade" — exibidos como lista visual com ícone de check. */
export const SECURITY_COMPLIANCE: string[] = [
  'PCI DSS SAQ-A (tokenização de pagamentos)',
  'LGPD (Lei 13.709/18 — proteção de dados pessoais)',
  'HTTPS/TLS em todas as comunicações',
  'Criptografia AES-256 em dados sensíveis',
  'RLS (Row Level Security) em 100% das tabelas',
];
