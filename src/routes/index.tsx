import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Brain,
  Mail,
  Users,
  Newspaper,
  Rocket,
  Handshake,
  MapPin,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import cofcoAudio from "@/assets/audio_cofco.mp4";
import bbzImg from "@/assets/bbz.jpeg";
import estrellaImg from "@/assets/estrella_galicia.jpg";
import bmpImg from "@/assets/bmp.jpeg";
import nxtImg from "@/assets/nxt.jpeg";
import postosAzulVideo from "@/assets/postos_azul.mp4";
import cofcoImg1 from "@/assets/cofco 1.jpeg";
import cofcoImg2 from "@/assets/cofco 2.jpeg";
import logoRoboteasy from "@/assets/LOGO_ROBOTEASY_HORIZONTAL_BRANCA (1).png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roboteasy em movimento — Newsletter Interna" },
      {
        name: "description",
        content: "Comunicação interna Roboteasy: visitas de clientes, mídia, entregas e novos contratos.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Newsletter,
});

function Newsletter() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ambient */}
      <div className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-40" />
      <div className="pointer-events-none fixed -top-40 -right-40 -z-10 h-[500px] w-[500px] rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none fixed -bottom-40 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-brand/40 blur-3xl animate-pulse-glow" />

      {/* NAV */}
      <header className="sticky top-0 z-50 glass">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-md bg-primary blur-md opacity-60" />
              <div className="relative grid h-8 w-8 place-items-center rounded-md bg-gradient-brand shadow-glow">
                <Brain className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
            <span className="font-display text-lg font-semibold tracking-tight uppercase">ROBOTEASY EM MOVIMENTO</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#visitas" className="hover:text-foreground transition">
              Visitas
            </a>
            <a href="#midia" className="hover:text-foreground transition">
              Mídia
            </a>
            <a href="#entregas" className="hover:text-foreground transition">
              Entregas
            </a>
            <a href="#clientes" className="hover:text-foreground transition">
              Novos clientes
            </a>

          </nav>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Interno
            </span>
            <img src={logoRoboteasy} alt="Roboteasy" className="h-7 w-auto" />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <img
          src={heroBg}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
          width={1920}
          height={1080}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Edição #01 — 21.MAI.2026
          </div>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            A newsletter semanal de quem está construindo o futuro da automação{" "}
            <span className="text-accent font-medium">(BETA)</span>
          </p>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] md:text-7xl lg:text-8xl">
            Roboteasy <br />
            <span className="text-gradient">em movimento</span>
          </h1>
          <div className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg whitespace-pre-line leading-relaxed">
            Mais uma semana intensa e temos muito a contar. Enquanto o mercado fala em transformação digital, aqui
            dentro a gente faz acontecer. Esta edição traz em primeira mão tudo o que moveu a Roboteasy nos últimos
            dias: novidades que chegaram, projetos que saíram do papel, visitas que abriram portas e clientes que
            escolheram caminhar com a gente. Isso é o AMEI na prática: alta performance construída no dia a dia, por
            cada um de vocês. Vem com a gente. Tem muita coisa boa nessa edição. 👇
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 max-w-3xl">
            {[
              { v: "01 projeto legado entregue", l: "", icon: Rocket },
              { v: "04", l: "menções na mídia", icon: Newspaper },
              { v: "06", l: "Projetos atuais entregues", icon: Rocket },
              { v: "01", l: "novo cliente", icon: Handshake },
            ].map((s, i) => (
              <div key={i} className="glass rounded-2xl p-4">
                <s.icon className="h-5 w-5 text-accent" />
                <div
                  className={`mt-3 font-display font-semibold ${
                    s.v.length > 20
                      ? "text-base leading-snug"
                      : s.v.length > 5
                      ? "text-xl leading-tight"
                      : "text-3xl md:text-4xl"
                  }`}
                >
                  {s.v}
                </div>
                {s.l && (
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-border/60 bg-card/30 py-4 overflow-hidden">
          <div className="flex w-max animate-marquee gap-12 px-5 font-mono text-sm uppercase tracking-widest text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span>// visita BMP</span>
                <span className="text-accent">◆</span>
                <span>// PODCAST NXT</span>
                <span className="text-accent">◆</span>
                <span>// entrega projeto SAUR</span>
                <span className="text-accent">◆</span>
                <span>// contrato Postos Azul assinado</span>
                <span className="text-accent">◆</span>
                <span>// visita a cofco</span>
                <span className="text-accent">◆</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISITAS */}
      <section id="visitas" className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeader kicker="VISITAS EM CLIENTES" title="De Olho no Cliente" icon={Users} />
        <div className="mt-8 flex flex-col gap-6">
          {/* COFCO — card principal */}
          <article className="group glass rounded-2xl overflow-hidden transition hover:translate-y-[-2px] hover:shadow-card">
            <div className="grid md:grid-cols-[3fr_2fr]">
              <div className="p-8 flex flex-col gap-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">MAIO · São Paulo</span>
                  <h3 className="mt-3 font-display text-4xl font-semibold">COFCO</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed md:text-base">
                    A COFCO nos escolheu como fornecedor oficial de automação e essa conquista é nossa. Maior cliente
                    da Roboteasy e uma multinacional de peso, a COFCO reconheceu o que o nosso time entrega todos os
                    dias. Parabéns time!!
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-accent" /> São Paulo
                  </div>
                </div>
                <div className="rounded-xl bg-card/50 border border-border p-3">
                  <audio src={cofcoAudio} controls className="w-full" />
                </div>
              </div>
              <div className="grid grid-cols-[3fr_2fr] gap-1 overflow-hidden">
                <div className="overflow-hidden">
                  <img src={cofcoImg1} alt="COFCO visita 1" className="h-full w-full object-cover" />
                </div>
                <div className="overflow-hidden">
                  <img src={cofcoImg2} alt="COFCO visita 2" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </article>

          {/* Demais visitas */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "BBZ",
                desc: "Presença que faz diferença: visita que reconectou, realinhou e garantiu a continuidade de quem escolheu caminhar com a gente.",
                loc: "São Paulo",
                image: bbzImg,
              },
              {
                name: "Estrella Galicia",
                desc: "Com a Estrella Galicia é assim: bom relacionamento que só melhora. A visita desta semana foi mais um encontro de quem já se entende bem e segue construindo junto. 🍺",
                loc: "São Paulo",
                image: estrellaImg,
              },
              {
                name: "BMP",
                desc: "A Roboteasy esteve na BMP e o clima é dos melhores. Visita de relacionamento que aqueceu o terreno para uma nova venda. O próximo capítulo dessa parceria está chegando. 🔥",
                loc: "São Paulo",
                image: bmpImg,
              },
            ].map((v) => (
              <article
                key={v.name}
                className="group glass rounded-2xl overflow-hidden transition hover:translate-y-[-2px] hover:shadow-card flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={v.image} alt={v.name} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">MAIO</span>
                  <h3 className="mt-2 font-display text-xl font-semibold">{v.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{v.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-accent" /> {v.loc}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MÍDIA */}
      <section id="midia" className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeader kicker="Na mídia" title="Roboteasy nas manchetes" icon={Newspaper} />
        <div className="mt-8 flex flex-col gap-6">
          <article className="group relative overflow-hidden rounded-2xl glass shadow-card">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img src={nxtImg} alt="Podcast NXT — Roboteasy" className="absolute inset-0 h-full w-full object-cover" />
              <span className="absolute top-4 left-4 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent-foreground">
                Destaque
              </span>
            </div>
            <div className="p-7">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">PODCAST NXT - MAIO</span>
              <h3 className="mt-2 font-display text-2xl font-semibold leading-tight md:text-3xl">
                "O que diferencia empresas que falam de tecnologia das que realmente transformam suas operações?"
              </h3>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                Daniel esteve no NXT Podcast para uma conversa sem rodeios sobre IA, liderança e transformação real
                nas empresas. No papo, ele trouxe sua visão sobre os impactos da inteligência artificial nas relações,
                no trabalho e na tomada de decisão e sobre os desafios de equilibrar automação, cultura e autonomia
                humana em um mercado cada vez mais acelerado. Um episódio que representa muito do que a Roboteasy
                acredita e pratica todos os dias. Em breve no ar. Fiquem ligados. 👀
              </p>

            </div>
          </article>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                src: "STARTEN.TECH",
                title: "IA sem controle: uso descentralizado nas empresas começa a gerar riscos operacionais",
                date: "14.MAI",
                url: "https://starten.tech/2026/05/14/ia-sem-controle-uso-descentralizado-nas-empresas-comeca-a-gerar-riscos-operacionais/",
              },
              {
                src: "SEGS",
                title: "Por que a automação falha? Prioridades erradas travam o potencial nas empresas",
                date: "04.MAI",
                url: "https://www.segs.com.br/seguros/446262-por-que-a-automacao-falha-prioridades-erradas-travam-o-potencial-nas-empresas",
              },
            ].map((a) => {
              const content = (
                <>
                  <div className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-secondary border border-border">
                    <Newspaper className="h-5 w-5 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent">
                      {a.src} <span className="text-muted-foreground text-teal-500">· {a.date}</span>
                    </div>
                    <h4 className="mt-1 font-display text-sm font-semibold leading-snug">{a.title}</h4>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-accent" />
                </>
              );
              if (a.url) {
                return (
                  <a
                    key={a.title}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-4 rounded-2xl glass p-5 transition hover:bg-card hover:translate-y-[-2px]"
                  >
                    {content}
                  </a>
                );
              }
              return (
                <article
                  key={a.title}
                  className="group flex gap-4 rounded-2xl glass p-5 transition hover:bg-card hover:translate-y-[-2px]"
                >
                  {content}
                </article>
              );
            })}
          </div>

          {/* Mídia stats */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { v: "4", l: "publicações em veículos diferentes" },
              { v: "2", l: "artigos publicados em maio" },
              { v: "1", l: "podcast" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-5 text-center">
                <div className="font-display text-3xl font-semibold text-accent">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTREGAS */}
      <section id="entregas" className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeader kicker="Entregas concluídas" title="Projetos no ar" icon={Rocket} />
        <div className="mt-8 space-y-4">
          {[
            {
              client: "Blumenau",
              gp: "Paulo",
              scope: "Melhorias Robôs — Risco de Churn",
            },
            {
              client: "Grupo Mendes",
              gp: "Paulo Sezerino",
              scope: "Melhorias Robôs — Risco de Churn",
            },
            {
              client: "Ascensus",
              gp: "Roberta Takeda",
              scope: "Conferência dos Pagamentos Diários",
            },
            {
              client: "Postos M7",
              gp: "Marco Coelho",
              scope: "Robô Conciliação de Cartão",
            },
            {
              client: "Sicoob Engecred",
              gp: "Roberta Takeda",
              scope: "R3 — Cadastro Controles Internos — Fase 2 — Etapas 3, 4, 7 e 8",
            },
            {
              client: "Cooperativa Agrária",
              gp: "Paulo Sezerino",
              scope: "Treinamento 34 horas",
            },
          ].map((p) => (
            <article key={p.client} className="group glass rounded-2xl p-5 md:p-6 transition hover:translate-y-[-2px]">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-brand shadow-glow">
                    <Rocket className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-base font-semibold">{p.client}</span>
                      <span className="font-mono text-xs text-muted-foreground">· GP: {p.gp}</span>
                    </div>
                    <h4 className="mt-1 text-sm text-muted-foreground leading-snug md:text-base">{p.scope}</h4>
                    <p className="mt-2 text-xs text-accent italic">
                      Parabéns ao time de desenvolvimento e projetos pela entrega com excelência
                    </p>
                  </div>
                </div>
                <span className="shrink-0 self-start rounded-full bg-accent/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/30">
                  Entregue
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NOVOS CLIENTES */}
      <section id="clientes" className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeader kicker="Contratos fechados" title="Bem-vindos à base" icon={Handshake} />
        <div className="mt-8">
          <article className="group relative overflow-hidden rounded-2xl glass transition hover:translate-y-[-2px] hover:shadow-accent">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition group-hover:bg-accent/20" />
            <div className="relative grid gap-0 md:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Novo cliente</span>
                  <Handshake className="h-4 w-4 text-accent" />
                </div>
                <h3 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
                  Bem-vindos,<br />
                  <span className="text-gradient">Postos Azul</span>
                </h3>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed md:text-base">
                  Postos Azul é o mais novo cliente da Roboteasy. 🎉 O case da BMP foi determinante na decisão, prova
                  de que bom trabalho fala por si só. Parabéns ao time comercial e em especial ao Adriano pelo
                  fechamento. 🚀
                </p>
              </div>
              <div className="overflow-hidden rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
                <video
                  src={postosAzulVideo}
                  controls
                  className="h-full w-full object-cover"
                  style={{ minHeight: "280px" }}
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* NOTA DO TIME DE MARKETING */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="relative overflow-hidden rounded-2xl glass p-8 md:p-12">
          <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative max-w-2xl mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Uma nota do time de Marketing</span>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed md:text-lg">
              Essa edição é um beta, criamos essa newsletter para contar, de dentro para dentro, tudo que move a
              Roboteasy semana a semana. Se fizer sentido pra vocês, ela vira rotina. Então nos conta: curtiu o
              formato? Tem algo que queria ver aqui? A newsletter é de todo o time e a continuidade dela também
              depende de vocês. 💚
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logoRoboteasy} alt="Roboteasy" className="h-6 w-auto opacity-80" />
            <span className="text-sm text-muted-foreground">· Comunicação interna · 2026</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <Mail className="h-3.5 w-3.5 text-accent" /> marketing@roboteasy.com.br
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeader({
  kicker,
  title,
  icon: Icon,
}: {
  kicker: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {Icon && <Icon className="h-3.5 w-3.5" />} // {kicker}
      </div>
      <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">{title}</h2>
    </div>
  );
}


