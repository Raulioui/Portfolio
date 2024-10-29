/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_CEIZ5UDn.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Cz0ysRSu.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ContactButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Contact Image originally from "https://hello.cuberto.com/" -->${maybeRenderHead()}<a href="/contact" class="hidden lg:flex absolute right-10 top-10 w-[200px] h-[200px] items-center justify-center hover:scale-110 ease-in-out duration-500 hover:cursor-pointer scale-100"> <img src="https://cdn.cuberto.com/cb/intouch/1.svg" width="120" height="120" class="animate-spin-slow"> <img src="../../public/Avatar.png" width="100" height="100" decoding="async" loading="lazy" alt="My Avatar" class="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2   right-[24px] w-[70px]  transform rounded-full"> </a>`;
}, "C:/Users/Admin/Portfolio/src/components/ContactButton.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "link": "/", "title": "Raul Muela Morey's Portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="text-center mx-auto mt-[200px] lg:mt-0 "> ${renderComponent($$result2, "ContactButton", $$ContactButton, {})} <h1 class="text-[#FACC15] font-bold text-4xl lg:text-5xl">Smart Contract & Frontend Developer</h1> <h2 class="text-white mt-12 text-4xl lg:text-5xl font-bold">Raul Muela</h2> <a href="https://github.com/Raulioui" class="bg-[#212121] flex-row justify-center cursor-pointer px-8 rounded-lg py-2 text-center inline-flex items-center mt-16 gap-2 hover:scale-110 hover:opacity-100 opacity-70  transition-all duration-200 ease-in-out font-bold text-white">
GitHub
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l14 0"></path> <path d="M15 16l4 -4"></path> <path d="M15 8l4 4"></path> </svg> </a> </main> ` })}`;
}, "C:/Users/Admin/Portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Admin/Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Index,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
