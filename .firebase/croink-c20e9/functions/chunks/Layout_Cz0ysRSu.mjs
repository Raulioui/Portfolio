import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, f as renderHead, d as renderComponent, e as renderSlot } from './astro/server_CEIZ5UDn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavBar;
  const { link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-transparent lg:w-[120px] flex py-10 flex-row items-center justify-center gap-16 lg:flex-col"> <a href="/" class="relative  inline-block group hover:cursor-pointer"> <!-- Circle Background --> <div class="absolute lg:hidden inset-0 flex items-center justify-center"> <div class="w-2 h-2 bg-slate-700 rounded-full opacity-0 transition-all duration-500 ease-out group-hover:w-10 group-hover:h-10 group-hover:opacity-100"></div> </div> <!-- Icon --> <div class="relative z-10 flex items-center justify-center w-10 h-10"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"${addAttribute(`${link == "/" ? "#FACC15" : "#FFFFFF"}`, "stroke")} fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path> <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path> <path d="M10 12h4v4h-4z"></path> </svg> </div> </a> <a href="/proyects" class="relative inline-block group hover:cursor-pointer"> <!-- Circle Background --> <div class="absolute lg:hidden inset-0 flex items-center justify-center"> <div class="w-2 h-2 bg-slate-700 rounded-full opacity-0 transition-all duration-500 ease-out group-hover:w-10 group-hover:h-10 group-hover:opacity-100"></div> </div> <!-- Icon --> <div class="relative z-10 flex items-center justify-center w-10 h-10"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"${addAttribute(`${link == "proyects" ? "#FACC15" : "#FFFFFF"}`, "stroke")} fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"></path> <path d="M13.5 6.5l4 4"></path> </svg> </div> </a> <a href="/about" class="relative inline-block group hover:cursor-pointer"> <!-- Circle Background --> <div class="absolute lg:hidden inset-0 flex items-center justify-center"> <div class="w-2 h-2 bg-slate-700 rounded-full opacity-0 transition-all duration-500 ease-out group-hover:w-10 group-hover:h-10 group-hover:opacity-100"></div> </div> <!-- Icon --> <div class="relative z-10 flex items-center justify-center w-10 h-10"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5"${addAttribute(`${link == "about" ? "#FACC15" : "#FFFFFF"}`, "stroke")} fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path> <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path> </svg> </div> </a> <a href="/contact" class="relative lg:hidden inline-block group hover:cursor-pointer"> <!-- Circle Background --> <div class="absolute inset-0 flex items-center justify-center"> <div class="w-2 h-2 bg-slate-700 rounded-full opacity-0 transition-all duration-500 ease-out group-hover:w-10 group-hover:h-10 group-hover:opacity-100"></div> </div> <!-- Icon --> <div class="relative z-10 flex items-center justify-center w-10 h-10"> <svg xmlns="http://www.w3.org/2000/svg" class="icon  icon-tabler icon-tabler-brand-telegram" width="20 lg:22" height="20 lg:22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path> </svg> </div> </a> </nav>`;
}, "C:/Users/Admin/Portfolio/src/components/NavBar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="fixed bottom-0  w-full py-12"> <div class="mx-auto flex flex-row justify-center gap-12 md:gap-[200px] items-center"> <p>© Raul Muela</p> <div class="flex items-center justify-center gap-1"> <p>Created with</p> <a href="https://astro.build/" class="underline">Astro</a> </div> <a href="/contact">Contact Me</a> </div> </footer>`;
}, "C:/Users/Admin/Portfolio/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, link } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="flex flex-col lg:flex-row lg:justify-between items-center bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"> ${renderComponent($$result, "NavBar", $$NavBar, { "link": link })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/Admin/Portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
