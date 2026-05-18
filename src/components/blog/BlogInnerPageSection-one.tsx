"use client";

import {
  useEffect,
  useMemo,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  type Variants,
} from "framer-motion";
import Container from "../Container";

const HERO_IMAGE =
  "https://cdn.hboxdigital.com/public/hbox-pay/images/contact-sales/Rectangle%20161123937%20(1).png";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

type ArticleSection = {
  id: string;
  title: string;
  body: ReactNode;
};

const articleSections: ArticleSection[] = [
  {
    id: "growth-changes",
    title: "Growth Changes How Retail Operations Work",
    body: (
      <>
        <p>
          <strong>
            A lot changes when a business expands beyond one location.
          </strong>
        </p>

        <p>
          The challenge is no longer just processing sales or handling
          transactions. It becomes about visibility, consistency, and control
          across the entire business.
        </p>

        <p>
          What’s happening at one location starts affecting another. Inventory
          shifts between stores. Customer expectations become consistent across
          every branch. Management decisions rely on accurate reporting from
          multiple locations at once.
        </p>

        <p>
          <strong>
            Without connected systems, everything becomes slower to manage.
          </strong>
        </p>
      </>
    ),
  },
  {
    id: "separate-systems",
    title: "Separate Systems Create Separate Problems",
    body: (
      <>
        <p>
          <strong>
            One of the biggest issues with disconnected POS software is that
            every store starts operating like its own isolated business.
          </strong>
        </p>

        <p>
          Sales data sits in different places. Inventory updates don’t sync
          properly. Staff performance gets harder to monitor consistently. And
          reporting becomes fragmented.
        </p>

        <p>
          Instead of having a clear view of the business, management ends up
          piecing together information manually.
        </p>

        <p>
          <strong>
            That delay affects decision-making more than most businesses
            realize.
          </strong>
        </p>

        <ul>
          <li>Simple questions start taking longer to answer.</li>
          <li>Which products are performing best across all locations?</li>
          <li>Which store is running low on inventory?</li>
          <li>Where are losses happening?</li>
          <li>Which branch is performing below average?</li>
        </ul>

        <p>
          Without centralized systems, even basic operational visibility becomes
          difficult.
        </p>
      </>
    ),
  },
  {
    id: "inventory-scale",
    title: "Inventory Problems Become More Expensive at Scale",
    body: (
      <>
        <p>
          <strong>
            Inventory management usually becomes one of the first major pain
            points for multi store businesses.
          </strong>
        </p>

        <p>
          When inventory isn’t connected across locations, things fall out of
          sync quickly. One branch may overstock products while another runs out
          completely. Transfers between locations become harder to track. And
          stock accuracy starts depending on manual updates instead of real-time
          visibility.
        </p>

        <p>That creates operational waste.</p>

        <p>
          <strong>
            Products stay stuck where they’re not needed while other stores lose
            potential sales because inventory information isn’t updated
            properly.
          </strong>
        </p>

        <p>
          This is where integrated inventory management stops becoming a
          convenience and becomes a requirement.
        </p>

        <p>
          Businesses need to know what’s available, where it’s available, and
          how inventory is moving across every location without relying on
          spreadsheets or delayed reporting.
        </p>
      </>
    ),
  },
  {
    id: "customer-consistency",
    title: "Customers Expect Consistency Across Every Store",
    body: (
      <>
        <p>
          <strong>
            From a customer’s perspective, every location represents the same
            business.
          </strong>
        </p>

        <p>
          They expect pricing, promotions, loyalty programs, and service quality
          to stay consistent regardless of which branch they visit.
        </p>

        <p>Disconnected systems make that harder to maintain.</p>

        <p>
          <strong>
            One location may apply promotions differently. Another may not
            recognize loyalty rewards properly. Customer information may not
            transfer between stores at all.
          </strong>
        </p>

        <p>
          That inconsistency affects trust faster than most businesses expect.
        </p>

        <p>
          A connected POS system helps create a more unified experience by
          keeping customer purchase history, loyalty activity, and promotions
          aligned across every location.
        </p>

        <p>
          And as customer expectations continue changing, that consistency
          matters more than ever.
        </p>
      </>
    ),
  },
  {
    id: "reporting-task",
    title: "Reporting Shouldn’t Feel Like a Separate Task",
    body: (
      <>
        <p>
          <strong>
            One thing that slows down growing retail businesses is fragmented
            reporting.
          </strong>
        </p>

        <p>
          When every store generates separate reports, management spends more
          time collecting information than actually using it.
        </p>

        <p>
          Numbers need to be compared manually. Performance has to be reviewed
          store by store. And by the time reports are compiled, the information
          is already delayed.
        </p>

        <p>
          <strong>That slows down decisions.</strong>
        </p>

        <p>
          Connected analytics and reporting systems change that completely.
          Instead of looking at stores individually, businesses can view
          performance across the entire operation in real time.
        </p>

        <p>
          Sales trends become easier to identify. Problem areas become more
          visible. And decisions happen faster because the information is already
          connected.
        </p>
      </>
    ),
  },
  {
    id: "employees-messy",
    title: "Managing Employees Across Multiple Stores Gets Messy Fast",
    body: (
      <>
        <p>
          <strong>
            Employee management becomes harder the moment businesses expand into
            multiple locations.
          </strong>
        </p>

        <p>
          Schedules become difficult to coordinate. Staff performance varies
          between stores. Attendance tracking becomes inconsistent. And
          communication gaps start appearing between branches.
        </p>

        <p>
          Without centralized systems, management ends up relying on separate
          processes for each location.
        </p>

        <p>
          <strong>That usually leads to inefficiencies.</strong>
        </p>

        <p>
          Connected employee management systems help businesses manage staffing
          more consistently across every store. Hours, permissions, schedules,
          and performance tracking stay organized within the same system instead
          of being scattered across different tools.
        </p>

        <p>
          And when teams are spread across multiple locations, operational
          clarity matters more than ever.
        </p>
      </>
    ),
  },
  {
    id: "real-time-visibility",
    title: "Multi Store Operations Need Real-Time Visibility",
    body: (
      <>
        <p>
          <strong>
            The larger a business becomes, the more important visibility
            becomes.
          </strong>
        </p>

        <p>
          Management shouldn’t need to wait until the end of the day to
          understand what’s happening across stores. They should be able to
          monitor operations as things happen.
        </p>

        <p>Real-time visibility changes how businesses respond to issues.</p>

        <p>
          <strong>
            Low inventory can be addressed immediately. Sales trends can be
            monitored while they develop. Operational problems become visible
            before they turn into larger disruptions.
          </strong>
        </p>

        <p>Without connected systems, that visibility simply doesn’t exist.</p>
      </>
    ),
  },
  {
    id: "ecommerce-complexity",
    title: "E-commerce Creates Another Layer of Complexity",
    body: (
      <>
        <p>
          <strong>
            For businesses managing both physical stores and online sales,
            disconnected systems create even more problems.
          </strong>
        </p>

        <p>
          Inventory mismatches become common. Orders get delayed. Customer
          experiences become inconsistent between online and in-store purchases.
        </p>

        <p>This is where proper e-commerce integration becomes critical.</p>

        <p>
          <strong>
            Customers now expect businesses to operate as one connected
            experience, not separate systems trying to work together manually.
          </strong>
        </p>

        <p>
          If inventory updates online but not in-store, or customer information
          doesn’t transfer properly between channels, trust starts breaking down
          quickly.
        </p>

        <p>
          Connected systems reduce those gaps and help businesses manage both
          retail and digital operations more smoothly.
        </p>
      </>
    ),
  },
  {
    id: "problem-immediately",
    title: "The Problem Usually Doesn’t Show Up Immediately",
    body: (
      <>
        <p>
          <strong>
            One reason businesses continue using disconnected POS systems for
            too long is because the issues don’t appear all at once.
          </strong>
        </p>

        <p>At first, things still function well enough.</p>

        <p>
          But growth slowly increases operational pressure. More stores create
          more complexity. More transactions create more data. More staff create
          more coordination challenges.
        </p>

        <p>
          <strong>
            And eventually, businesses start spending more time managing systems
            than managing growth.
          </strong>
        </p>

        <p>
          That’s usually when it becomes clear the setup no longer supports the
          business properly.
        </p>
      </>
    ),
  },
  {
    id: "connected-business",
    title: "A Connected Business Operates Differently",
    body: (
      <>
        <p>
          <strong>
            Businesses that operate with integrated systems usually move faster.
          </strong>
        </p>

        <p>
          Not because they work harder, but because information moves properly
          between operations.
        </p>

        <p>
          Inventory updates automatically. Customer data stays connected.
          Reporting happens in real time. Store performance becomes easier to
          monitor. Decisions happen faster because visibility already exists.
        </p>

        <p>
          <strong>
            That operational clarity creates a different kind of efficiency.
          </strong>
        </p>

        <p>
          And once businesses experience it, going back to disconnected systems
          feels difficult.
        </p>
      </>
    ),
  },
  {
    id: "scaling-harder",
    title: "Scaling Becomes Harder Without Operational Structure",
    body: (
      <>
        <p>
          <strong>
            A lot of businesses focus heavily on expansion while underestimating
            operational structure.
          </strong>
        </p>

        <p>
          Opening more stores is one thing. Managing them efficiently is
          something else entirely.
        </p>

        <p>
          Without connected systems, growth creates friction instead of momentum.
        </p>

        <p>
          <strong>
            Processes become harder to maintain consistently. Reporting becomes
            slower. Inventory issues become more expensive. And operational
            visibility weakens as the business expands.
          </strong>
        </p>

        <p>
          That’s why modern multi store management depends heavily on systems
          that communicate properly across the entire operation.
        </p>

        <p>Not just for convenience, but for stability.</p>
      </>
    ),
  },
  {
    id: "final-thought",
    title: "Final Thought",
    body: (
      <>
        <p>
          <strong>
            Separate POS systems may work for a while, especially in the early
            stages of growth.
          </strong>
        </p>

        <p>
          But multi store businesses eventually reach a point where disconnected
          operations start slowing everything down.
        </p>

        <p>
          Inventory becomes harder to manage. Reporting becomes fragmented.
          Customer experiences become inconsistent. And management loses the
          visibility needed to make fast decisions.
        </p>

        <p>
          <strong>
            The businesses that scale successfully are usually the ones that
            stop treating stores like separate operations and start running them
            as one connected system.
          </strong>
        </p>

        <p>
          Because growth becomes much easier when the business moves together
          instead of location by location.
        </p>
      </>
    ),
  },
];

const contents = [
  {
    id: "intro",
    title: "Why Multi Store Businesses Need More Than Just Separate POS Systems",
  },
  ...articleSections.map((section) => ({
    id: section.id,
    title: section.title,
  })),
];

export default function BlogInnerPageSection() {
  const [activeId, setActiveId] = useState("intro");

  const sectionIds = useMemo(() => contents.map((item) => item.id), []);

  const { scrollYProgress } = useScroll();

  const readingProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry?.target?.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-28% 0px -58% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleSmoothScroll = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const target = document.getElementById(id);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  };

  return (
    <section className="relative overflow-visible bg-white py-12 text-[#111111] sm:py-16 md:py-20">
      {/* Reading Progress Bar */}
      <div className="fixed left-0 right-0 top-0 z-[100] h-[4px] bg-black/5">
        <motion.div
          style={{ scaleX: readingProgress }}
          className="h-full origin-left bg-[#8CEE54]"
        />
      </div>

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* Soft Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[min(720px,90vw)] -translate-x-1/2 rounded-full bg-[#A9EF7D]/20 blur-[110px]" />

      <Container className="relative z-10 overflow-visible">
        {/* HERO */}
        <motion.div
          id="intro"
          initial="hidden"
          animate="visible"
          variants={staggerParent}
          className="mx-auto max-w-[1060px] scroll-mt-28"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-8 w-[5px] rounded-full bg-[#A9EF7D]" />
            <p className="text-[14px] font-semibold text-[#2F8429] sm:text-[15px]">
              Featured Articles
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-[58%_42%] md:items-start md:gap-8">
            <motion.h1
              variants={fadeUp}
              className="max-w-[680px] text-[34px] font-light leading-[1.08] tracking-[-0.045em] text-[#171717] sm:text-[44px] md:text-[48px] lg:text-[54px]"
            >
              Why Multi Store Businesses Need More Than{" "}
              <span className="font-semibold text-[#2F8429]">
                Just Separate POS Systems
              </span>
            </motion.h1>

            <motion.div variants={fadeUp} className="max-w-[440px] md:pt-4">
              <p className="text-[15px] leading-[1.6] tracking-[-0.01em] text-[#333333]">
                Running one store is manageable. Running multiple locations is
                where things start getting complicated.
              </p>

              <p className="mt-5 text-[15px] leading-[1.6] tracking-[-0.01em] text-[#333333]">
                At first, using separate POS systems across different stores
                might seem fine. Each branch handles its own sales, inventory,
                staff, and reporting. Everything works independently, and on the
                surface, it feels organized enough to keep operations moving.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn}
            className="mt-8 overflow-hidden rounded-[18px] border border-black/5 bg-white p-2 shadow-[0_24px_80px_rgba(0,0,0,0.08)]"
          >
            <img
              src={HERO_IMAGE}
              alt="Green abstract business operations article visual"
              className="h-[240px] w-full rounded-[14px] object-cover sm:h-[360px] md:h-[430px]"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[14px] text-[#333333] sm:text-[15px]"
          >
            <span>16 May, 2026</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#333333]" />
            <span>8 mins read</span>
          </motion.div>
        </motion.div>

        {/* MOBILE CONTENTS */}
        <div className="sticky top-[68px] z-40 mx-auto mt-10 block max-w-[1060px] rounded-[18px] border border-black/5 bg-white/90 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.08)] backdrop-blur lg:hidden">
          <div className="mb-3 flex items-center justify-between gap-4 px-1">
            <div>
              <h3 className="text-[14px] font-semibold text-black">
                Contents
              </h3>
              <p className="text-[11px] text-black/45">Swipe to view</p>
            </div>

            <span className="shrink-0 rounded-full bg-[#A9EF7D] px-3 py-1 text-[10px] font-semibold text-[#1E5F1C]">
              {contents.length} Sections
            </span>
          </div>

          <nav className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {contents.map((item, index) => {
              const isActive = activeId === item.id;

              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleSmoothScroll(event, item.id)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-[11px] font-semibold transition ${
                    isActive
                      ? "border-[#8CEE54] bg-[#EFFFDF] text-[#2F8429]"
                      : "border-black/10 bg-white text-black/60 hover:border-[#8CEE54] hover:text-[#2F8429]"
                  }`}
                >
                  <span className="mr-1 text-black/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ARTICLE BODY */}
        <Container>
        <div className="mx-auto mt-12 grid  grid-cols-1 items-start gap-10 overflow-visible lg:mt-14 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-4">
          {/* DESKTOP STICKY CONTENTS */}
          <aside className="hidden w-[14vw] h-fit self-start lg:sticky lg:top-24 lg:block">
            <div className="max-h-[calc(100dvh-120px)] overflow-y-auto rounded-[22px] border border-black/5 bg-[#F7F7F7]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur [scrollbar-width:thin]  [&::-webkit-scrollbar-thumb]:bg-black/15 [&::-webkit-scrollbar-track]:bg-transparent">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-[15px] font-semibold text-black">
                    Contents
                  </h3>
                  <p className="mt-1 text-[15px] text-black/45">
                    Jump to any section
                  </p>
                </div>

                <span className="shrink-0 rounded-full bg-[#A9EF7D] px-3 py-1 text-[10px] font-semibold text-[#1E5F1C]">
                  {contents.length}
                </span>
              </div>

              <nav className="mt-5 space-y-1.5">
                {contents.map((item, index) => {
                  const isActive = activeId === item.id;

                  return (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(event) => handleSmoothScroll(event, item.id)}
                      className={`group relative flex gap-2 rounded-[14px] px-3 py-3 text-[12px] font-medium leading-[1.4] transition-all duration-200 ${
                        isActive
                          ? "bg-white text-[#2F8429] shadow-sm"
                          : "text-black/60 hover:bg-white/75 hover:text-[#2F8429]"
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full transition-all duration-200 ${
                          isActive ? "bg-[#8CEE54]" : "bg-transparent"
                        }`}
                      />

                      <span
                        className={`mt-[1px] text-[12px] font-semibold ${
                          isActive ? "text-[#2F8429]/60" : "text-black/30"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1">{item.title}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* MAIN ARTICLE */}
          <article className="min-w-0  space-y-10">
            {articleSections.map((section, index) => (
              <ArticleBlock
                key={section.id}
                id={section.id}
                index={index + 1}
                title={section.title}
              >
                {section.body}
              </ArticleBlock>
            ))}
          </article>
        </div>
        </Container>
      </Container>
    </section>
  );
}

function ArticleBlock({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      variants={fadeUp}
      className="scroll-mt-32 rounded-[20px] border border-black/[0.04] bg-white/80 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.045)] backdrop-blur sm:p-7"
    >
      <div className="mb-5 flex items-start gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8FEDB] text-[12px] font-bold text-[#2F8429]">
          {String(index).padStart(2, "0")}
        </span>

        <h2 className="text-[24px] font-semibold leading-tight tracking-[-0.035em] text-black sm:text-[26px] md:text-[28px]">
          {title}
        </h2>
      </div>

      <div className="space-y-4 text-[15px] leading-[1.7] text-[#333333] [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[12px] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-[#8CEE54] [&_strong]:font-semibold [&_strong]:text-black [&_ul]:space-y-2 [&_ul]:pt-1">
        {children}
      </div>
    </motion.section>
  );
}