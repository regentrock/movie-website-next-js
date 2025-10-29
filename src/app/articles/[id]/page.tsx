import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import styles from "./articlePage.module.css";

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find(art => art.id.toString() === params.id);

  if (!article) {
    notFound();
  }

  const fullContent = {
    1: `
      <p>O desenvolvimento web passou por transformações radicais nos últimos anos. Desde os primórdios do HTML estático até as aplicações complexas de hoje, a evolução tem sido constante e acelerada.</p>
      
      <p>Frameworks como Next.js introduziram conceitos revolucionários como Server Components, que permitem uma renderização mais eficiente e melhor performance. Essa abordagem reduz significativamente o JavaScript enviado ao cliente, resultando em tempos de carregamento mais rápidos.</p>
      
      <h3>O Impacto na Experiência do Usuário</h3>
      
      <p>Com essas tecnologias, os desenvolvedores podem criar experiências mais fluidas e responsivas. A renderização no lado do servidor (SSR) e a geração estática (SSG) se tornaram padrões na indústria, oferecendo o melhor dos dois mundos: performance e dinamismo.</p>
      
      <blockquote>
        "O futuro do desenvolvimento web está na união perfeita entre performance e experiência do usuário"
      </blockquote>
      
      <p>À medida que essas tecnologias amadurecem, esperamos ver aplicações ainda mais rápidas e acessíveis, democratizando o acesso à informação em escala global.</p>
    `,
    2: `
      <p>A Inteligência Artificial deixou de ser um conceito de ficção científica para se tornar uma ferramenta cotidiana que impacta praticamente todos os aspectos das nossas vidas.</p>
      
      <p>Desde assistentes virtuais até sistemas de recomendação, a IA está presente em:</p>
      
      <ul>
        <li>Atendimento ao cliente automatizado</li>
        <li>Diagnósticos médicos precisos</li>
        <li>Otimização de rotas de transporte</li>
        <li>Personalização de conteúdo</li>
      </ul>
      
      <h3>Desafios e Oportunidades</h3>
      
      <p>Enquanto a IA oferece benefícios significativos, também apresenta desafios éticos importantes. A privacidade de dados, o viés algorítmico e o impacto no emprego são questões que exigem atenção cuidadosa.</p>
      
      <p>No entanto, as oportunidades são enormes. Empresas que adotam soluções de IA relatam aumentos significativos na eficiência e na qualidade dos serviços oferecidos.</p>
    `,
    3: `
      <p>Dark Patterns são interfaces projetadas para enganar ou manipular os usuários, levando-os a tomar decisões que não tomariam conscientemente.</p>
      
      <p>Essas práticas antiéticas incluem:</p>
      
      <ul>
        <li>Cancelamentos difíceis de assinaturas</li>
        <li>Confirmações enganosas</li>
        <li>Opções pré-selecionadas desvantajosas</li>
        <li>Informações essenciais escondidas</li>
      </ul>
      
      <h3>O Impacto na Confiança do Usuário</h3>
      
      <p>Quando empresas utilizam Dark Patterns, podem obter ganhos de curto prazo, mas arriscam perder a confiança dos consumidores a longo prazo. Usuários que se sentem enganados são menos propensos a retornar ou recomendar o serviço.</p>
      
      <blockquote>
        "Um design ético não é apenas uma questão de moralidade, mas de negócios inteligentes"
      </blockquote>
      
      <p>Reguladores em todo o mundo estão começando a tomar medidas contra essas práticas, reconhecendo seu potencial para causar danos reais aos consumidores.</p>
    `,
    4: `
      <p>A produtividade na programação vai além de simplesmente escrever código rapidamente. Envolve práticas sustentáveis que permitem aos desenvolvedores manterem a qualidade e a consistência ao longo do tempo.</p>
      
      <h3>Ferramentas Essenciais</h3>
      
      <p>Algumas ferramentas que podem aumentar significativamente a produtividade:</p>
      
      <ul>
        <li>Editores com autocompletar inteligente</li>
        <li>Sistemas de controle de versão</li>
        <li>Plataformas de deploy automatizado</li>
        <li>Ferramentas de debugging avançadas</li>
      </ul>
      
      <h3>Técnicas Comprovadas</h3>
      
      <p>Além das ferramentas, metodologias como:</p>
      
      <ul>
        <li>Desenvolvimento orientado a testes (TDD)</li>
        <li>Programação em par</li>
        <li>Refatoração constante</li>
        <li>Revisões de código</li>
      </ul>
      
      <p>Essas práticas não apenas melhoram a produtividade individual, mas também fortalecem a qualidade do trabalho em equipe.</p>
    `,
    5: `
      <p>Em um mundo cada vez mais digital, a segurança da informação se tornou uma preocupação fundamental para indivíduos e organizações.</p>
      
      <h3>Boas Práticas Essenciais</h3>
      
      <p>Algumas medidas básicas que todos deveriam adotar:</p>
      
      <ul>
        <li>Usar senhas fortes e únicas para cada serviço</li>
        <li>Ativar a autenticação de dois fatores</li>
        <li>Manter software e sistemas atualizados</li>
        <li>Fazer backup regular dos dados importantes</li>
      </ul>
      
      <h3>Ameaças Comuns</h3>
      
      <p>As ameaças digitais evoluem constantemente, mas algumas permanecem comuns:</p>
      
      <ul>
        <li>Phishing e engenharia social</li>
        <li>Malware e ransomware</li>
        <li>Ataques de força bruta</li>
        <li>Vazamentos de dados</li>
      </ul>
      
      <blockquote>
        "A segurança digital não é um produto, mas um processo contínuo"
      </blockquote>
      
      <p>Investir em educação e conscientização é tão importante quanto investir em soluções técnicas. Usuários bem informados são a primeira linha de defesa contra ataques cibernéticos.</p>
    `
  };

  const articleContent = fullContent[article.id as keyof typeof fullContent] || `<p>Conteúdo completo em desenvolvimento...</p>`;

  return (
    <div className={styles.articlePage}>
      <nav className={styles.breadcrumb}>
        <div className="container">
          <Link href="/" className={styles.breadcrumbLink}>Início</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link href="/" className={styles.breadcrumbLink}>Artigos</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>{article.title}</span>
        </div>
      </nav>

      <section className={styles.articleHero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.articleCategory}>Tecnologia</span>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            <p className={styles.articleDescription}>{article.description}</p>
            <div className={styles.articleMeta}>
              <span className={styles.articleDate}>
                {new Date(article.date).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
              <span className={styles.readingTime}>• 5 min de leitura</span>
            </div>
          </div>
        </div>
      </section>

      <article className={styles.article}>
        <div className="container">
          <div className={styles.articleContent}>
            <div 
              className={styles.contentWrapper}
              dangerouslySetInnerHTML={{ __html: articleContent }}
            />
          </div>

          <footer className={styles.articleFooter}>
            <div className={styles.articleActions}>
              <Link href="/articles" className={styles.backButton}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Voltar para Artigos
              </Link>
              <div className={styles.shareSection}>
  <span>Compartilhar:</span>

  <button className={styles.shareButton} title="Compartilhar no X (Twitter)">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.244 2H21.5l-7.51 8.57L22 22h-6.5l-5.18-6.69L4.5 22H1.243l8.012-9.15L2 2h6.65l4.69 6.21L18.244 2zM17 20l-10-13h2.5l10 13H17z" />
    </svg>
  </button>

  <button className={styles.shareButton} title="Copiar link">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 1 0 0 6h3v2h-3a5 5 0 0 1-5-5zm7-3h3a5 5 0 0 1 0 10h-3v-2h3a3 3 0 0 0 0-6h-3V9z" />
    </svg>
  </button>
</div>

            </div>
          </footer>
        </div>
      </article>

      <section className={styles.relatedArticles}>
        <div className="container">
          <div className={styles.relatedHeader}>
            <h2 className={styles.relatedTitle}>Continue Lendo</h2>
            <p className={styles.relatedSubtitle}>Descubra mais artigos que podem interessar você</p>
          </div>
          <div className={styles.relatedGrid}>
            {articles
              .filter(art => art.id !== article.id)
              .slice(0, 3)
              .map(relatedArticle => (
                <Link 
                  key={relatedArticle.id} 
                  href={`/articles/${relatedArticle.id}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedCardContent}>
                    <h3>{relatedArticle.title}</h3>
                    <p>{relatedArticle.description}</p>
                    <div className={styles.relatedMeta}>
                      <span className={styles.relatedDate}>
                        {new Date(relatedArticle.date).toLocaleDateString('pt-BR')}
                      </span>
                      <span className={styles.relatedReadMore}>Ler mais →</span>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = articles.find(art => art.id.toString() === params.id);

  return {
    title: `${article?.title} - NewsPress`,
    description: article?.description,
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id.toString(),
  }));
}