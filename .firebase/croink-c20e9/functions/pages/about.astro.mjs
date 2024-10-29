/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CEIZ5UDn.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Cz0ysRSu.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "link": "about", "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center mx-auto"> <div class="text-white mt-20 lg:mt-0 w-[90%] text-center mx-auto text-lg"> <div class="mb-8"> <img src="../../public/Avatar.png" width="100" height="100" decoding="async" loading="lazy" alt="My Avatar" class="m-auto w-[120px] rounded-full mb-4"> <h1><span class="text-[#FACC15] font-bold text-2xl ">Hi!</span> I'm Raul Muela</h1> </div> <p class="max-w-[800px] mx-auto mb-6">I'm from Mallorca, Spain, I started programming 5 years ago simple thinks, so i decided study a 2 years degree of web development at <a class="underline" href="https://www.cesurformacion.com/">Cesur</a>, that i'm currently finishing.</p> <p class="max-w-[800px] mx-auto">Along my journey i started playing with the web3 world and i became fascinated, so 2 years ago i started investigating this world by my own, now i spend most of my time enjoing developing apps for the web3 space!!</p> </div> </div> ` })}`;
}, "C:/Users/Admin/Portfolio/src/pages/about.astro", void 0);

const $$file = "C:/Users/Admin/Portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
