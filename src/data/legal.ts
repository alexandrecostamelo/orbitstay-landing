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

// ── Termos de Uso e Política de Privacidade (texto longo) ──────────────────
// DRAFT: textos jurídicos rascunho — revisar com advogado antes do launch.
// Placeholders [INSERIR ...] devem ser preenchidos com os dados da empresa.

/** Seção de texto longo: título, parágrafos e/ou itens de lista. `id` permite
 *  âncora (ex.: /privacidade#cookies). */
export interface LegalLongSection {
  id?: string;
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export const COMPANY_NAME = '[INSERIR RAZÃO SOCIAL]';
export const COMPANY_CNPJ = '[INSERIR CNPJ]';
export const DPO_NAME = '[INSERIR NOME DPO]';
export const COURT_DISTRICT = 'comarca de Presidente Prudente, Estado de São Paulo';

export const TERMS_INTRO =
  `Estes Termos de Uso regem o acesso e a utilização da plataforma ORBITstay, ` +
  `operada por ${COMPANY_NAME}, inscrita no CNPJ sob o nº ${COMPANY_CNPJ}. Ao ` +
  `contratar ou utilizar a plataforma, o contratante declara ter lido e aceito ` +
  `integralmente estes termos.`;

export const TERMS_SECTIONS: LegalLongSection[] = [
  {
    heading: '1. Definições',
    items: [
      '"Plataforma": o sistema ORBITstay, incluindo PMS, motor de reservas, site do hotel, portal do hóspede e integrações.',
      '"Contratante": a pessoa jurídica ou física que contrata a plataforma para gestão de seu meio de hospedagem.',
      '"Hóspede": o usuário final que realiza reservas ou utiliza serviços do contratante por meio da plataforma.',
      '"Dados": todas as informações inseridas, geradas ou processadas no uso da plataforma.',
    ],
  },
  {
    heading: '2. Objeto',
    paragraphs: [
      'A plataforma é licenciada na modalidade Software como Serviço (SaaS), mediante assinatura. A ORBITstay concede ao contratante uma licença de uso não exclusiva, intransferível e revogável, limitada à vigência da assinatura.',
      'A licença não implica cessão de código-fonte, propriedade intelectual ou direito de revenda.',
    ],
  },
  {
    heading: '3. Cadastro e conta',
    paragraphs: [
      'O contratante é responsável pela veracidade dos dados de cadastro e pela guarda das credenciais de acesso de sua equipe.',
      'A ORBITstay poderá suspender contas com indícios de uso fraudulento, inadimplência ou violação destes termos.',
    ],
  },
  {
    heading: '4. Obrigações do contratante',
    items: [
      'Utilizar a plataforma em conformidade com a legislação aplicável, incluindo a LGPD.',
      'Obter as bases legais necessárias para o tratamento de dados de seus hóspedes.',
      'Manter atualizados os dados cadastrais, fiscais e de cobrança.',
      'Não utilizar a plataforma para fins ilícitos, ofensivos ou que violem direitos de terceiros.',
    ],
  },
  {
    heading: '5. Obrigações da plataforma',
    items: [
      'Disponibilizar a plataforma com nível de serviço compatível com o plano contratado.',
      'Adotar medidas técnicas e administrativas de segurança da informação.',
      'Atuar como operadora de dados pessoais nos termos da LGPD, tratando-os conforme as instruções do contratante.',
      'Comunicar incidentes de segurança relevantes em prazo razoável.',
    ],
  },
  {
    heading: '6. Pagamento e cobrança',
    paragraphs: [
      'A assinatura é cobrada de forma recorrente conforme o plano e a periodicidade contratados. O não pagamento poderá acarretar suspensão ou cancelamento do acesso.',
      'Os valores de transações de hóspedes são processados pelo gateway de pagamento e repassados conforme as regras do respectivo provedor.',
    ],
  },
  {
    heading: '7. Propriedade intelectual',
    paragraphs: [
      'Todo o software, marca, layout e materiais da plataforma são de titularidade exclusiva da ORBITstay. Os dados inseridos pelo contratante permanecem de sua titularidade.',
    ],
  },
  {
    heading: '8. Limitação de responsabilidade',
    paragraphs: [
      'A plataforma é fornecida "no estado em que se encontra". A ORBITstay não se responsabiliza por danos indiretos, lucros cessantes ou indisponibilidades decorrentes de fatores fora de seu controle razoável, incluindo falhas de terceiros (provedores de infraestrutura, pagamento ou conectividade).',
    ],
  },
  {
    heading: '9. Cancelamento',
    paragraphs: [
      'O contratante pode cancelar a assinatura a qualquer momento, com efeito ao fim do ciclo vigente. Após o cancelamento, os dados poderão ser exportados dentro do prazo informado e, em seguida, removidos conforme a política de retenção.',
    ],
  },
  {
    heading: '10. Disposições gerais',
    paragraphs: [
      'A ORBITstay poderá alterar estes termos mediante aviso prévio razoável. O uso continuado da plataforma após as alterações implica concordância com a nova versão.',
    ],
  },
  {
    heading: '11. Foro',
    paragraphs: [
      `Fica eleito o foro da ${COURT_DISTRICT}, para dirimir quaisquer controvérsias decorrentes destes termos, com renúncia a qualquer outro, por mais privilegiado que seja.`,
    ],
  },
];

export const PRIVACY_INTRO =
  `Esta Política de Privacidade descreve como a ORBITstay coleta, utiliza, ` +
  `compartilha e protege dados pessoais, em conformidade com a Lei Geral de ` +
  `Proteção de Dados (Lei 13.709/18 — LGPD).`;

export const PRIVACY_SECTIONS: LegalLongSection[] = [
  {
    heading: '1. Quem somos',
    paragraphs: [
      `A plataforma ORBITstay é operada por ${COMPANY_NAME}, CNPJ ${COMPANY_CNPJ}. Atuamos como controladora dos dados de nossos contratantes (hoteleiros) e como operadora dos dados de hóspedes tratados em nome de cada hotel.`,
    ],
  },
  {
    heading: '2. Dados que coletamos',
    items: [
      'Dados do hoteleiro: nome, e-mail, telefone, CNPJ, dados de cobrança e credenciais de acesso.',
      'Dados do hóspede: nome, documento, contato, dados da reserva e, quando exigido pelo hotel, informações de FNRH (Ficha Nacional de Registro de Hóspedes) e foto/placa para acesso automatizado.',
      'Dados de uso: registros de acesso, endereço IP e eventos de navegação para segurança e melhoria do serviço.',
    ],
  },
  {
    heading: '3. Base legal',
    paragraphs: [
      'O tratamento de dados se fundamenta, conforme o caso, na execução de contrato, no cumprimento de obrigação legal ou regulatória, no legítimo interesse e no consentimento do titular.',
    ],
  },
  {
    heading: '4. Finalidade do tratamento',
    items: [
      'Operar a plataforma e viabilizar reservas, check-in e gestão hoteleira.',
      'Processar pagamentos e emitir documentos fiscais.',
      'Cumprir obrigações legais, como o registro de hóspedes.',
      'Garantir a segurança, prevenir fraudes e melhorar o serviço.',
    ],
  },
  {
    heading: '5. Compartilhamento e sub-processadores',
    paragraphs: [
      'Compartilhamos dados apenas com sub-processadores necessários à operação, sob obrigações contratuais de segurança e confidencialidade:',
    ],
    items: [
      'Supabase — banco de dados e autenticação (infraestrutura AWS São Paulo).',
      'Vercel — hospedagem da aplicação e do site.',
      'Cloudflare — edge, CDN e proteção de rede.',
      'Pagar.me — processamento de pagamentos (tokenização PCI).',
      'Resend — envio de e-mails transacionais.',
      'Upstash — fila e cache de processamento.',
      'TTLock — integração de fechaduras inteligentes (quando habilitada pelo hotel).',
    ],
  },
  {
    id: 'cookies',
    heading: '6. Cookies e rastreamento',
    paragraphs: [
      'Utilizamos cookies para operar a plataforma e, mediante consentimento, para análise e marketing. Você pode escolher entre "Aceitar" todos ou "Apenas essenciais" no banner exibido na primeira visita.',
    ],
    items: [
      'Cookies essenciais (sessão): mantêm login e estado de navegação. Sempre ativos.',
      'orbitstay_consent: registra sua escolha de consentimento (validade de 365 dias).',
      'Cookies de análise e marketing: Google Analytics 4, Meta Pixel e Google Tag Manager — carregados somente se você aceitar todos os cookies.',
    ],
  },
  {
    heading: '7. Retenção de dados',
    paragraphs: [
      'Mantemos os dados pelo tempo necessário às finalidades informadas e ao cumprimento de obrigações legais. Dados de FNRH são removidos automaticamente após o prazo de retenção definido por cada hotel.',
    ],
  },
  {
    heading: '8. Direitos do titular',
    items: [
      'Confirmação da existência de tratamento e acesso aos dados.',
      'Correção de dados incompletos, inexatos ou desatualizados.',
      'Exclusão ou anonimização dos dados, quando cabível.',
      'Portabilidade dos dados a outro fornecedor.',
      'Oposição ao tratamento e revogação do consentimento.',
    ],
  },
  {
    heading: '9. Canal de comunicação',
    paragraphs: [
      `Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato pelo e-mail ${PRIVACY_EMAIL}.`,
    ],
  },
  {
    heading: '10. Encarregado (DPO)',
    paragraphs: [
      `O Encarregado pelo Tratamento de Dados Pessoais (DPO) é ${DPO_NAME}, que pode ser contatado pelo e-mail ${PRIVACY_EMAIL}.`,
    ],
  },
  {
    heading: '11. Alterações nesta política',
    paragraphs: [
      'Podemos atualizar esta política periodicamente. A versão vigente estará sempre disponível nesta página, com a respectiva data de atualização.',
    ],
  },
];
