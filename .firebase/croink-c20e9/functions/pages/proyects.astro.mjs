/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as createAstro, a as addAttribute, e as renderSlot, d as renderComponent } from '../chunks/astro/server_CEIZ5UDn.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Cz0ysRSu.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$NextJs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NextJs;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <defs> <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <circle id="a" cx="128" cy="128" r="128"></circle> </defs> <mask id="b" fill="#fff"> <use xlink:href="#a"></use> </mask> <g mask="url(#b)"> <circle cx="128" cy="128" r="128"></circle> <path fill="url(#c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"></path> <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path> </g> </svg>`;
}, "C:/Users/Admin/Portfolio/src/components/icons/NextJs.astro", void 0);

const $$Astro$3 = createAstro();
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "C:/Users/Admin/Portfolio/src/components/icons/Tailwind.astro", void 0);

const $$Solidity = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#ffffff" rx="80"></rect><path fill="#000" d="m165.536 25l-37.53 58.79H53L90.503 25z" opacity="0.45"></path><path fill="#000" d="M128.006 83.79h75.033L165.536 25H90.503z" opacity="0.6"></path><path fill="#000" d="m90.503 142.557l37.503-58.767L90.503 25L53 83.79z" opacity="0.8"></path><path fill="#000" d="m90.867 230.742l37.529-58.79h75.033l-37.53 58.79z" opacity="0.45"></path><path fill="#000" d="M128.396 171.952H53.363l37.503 58.79H165.9z" opacity="0.6"></path><path fill="#000" d="m165.899 113.185l-37.503 58.767l37.503 58.79l37.529-58.79z" opacity="0.8"></path></g></svg>`;
}, "C:/Users/Admin/Portfolio/src/components/icons/Solidity.astro", void 0);

const $$Foundry = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img src="../../public/Foundry.png" width="10" height="10" decoding="async" loading="lazy" alt="Foundry" class="">`;
}, "C:/Users/Admin/Portfolio/src/components/icons/Foundry.astro", void 0);

const $$Astro$2 = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center justify-center gap-2 px-2 py-1 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Admin/Portfolio/src/components/LinkButton.astro", void 0);

const $$Astro$1 = createAstro();
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "C:/Users/Admin/Portfolio/src/components/icons/Github.astro", void 0);

const $$Astro = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "C:/Users/Admin/Portfolio/src/components/icons/Link.astro", void 0);

const $$Proyects = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    NEXT: {
      name: "Next.js",
      class: "bg-black text-white",
      icon: $$NextJs
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: $$Tailwind
    },
    SOLIDITY: {
      name: "Solidity",
      class: "bg-white text-black",
      icon: $$Solidity
    },
    FOUNDRY: {
      name: "Foundry",
      class: "bg-[#FA8016] text-black",
      icon: $$Foundry
    }
  };
  const PROJECTS = [
    {
      title: "Crowdfunding",
      description: "Plattform that allows you to create single crowdfundings and enter in grants programs",
      link: "https://crowdfunding-c7d95.web.app/",
      githubFrontend: "https://github.com/Raulioui/Crowdfunding-Frontend",
      githubBackend: "https://github.com/Raulioui/Crowdfunding-Backend",
      image: "../../public/Crowdfunding.png",
      tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.SOLIDITY, TAGS.FOUNDRY]
    },
    {
      title: "CrossLink",
      description: "No-Oracle borrowing and lending platform integrated with chainlink CCIP",
      image: "../../public/CrossLink.png",
      githubBackend: "https://github.com/Raulioui/Crowdfunding-Backend",
      tags: [TAGS.SOLIDITY, TAGS.FOUNDRY]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "link": "proyects", "title": "Proyects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-y-16 mx-auto mt-20 lg:mt-0"> ${PROJECTS.map(({ image, title, description, tags, link, githubFrontend, githubBackend }) => renderTemplate`<article class="flex flex-col space-x-0  space-y-8 group lg:flex-row lg:space-x-8 lg:space-y-0"> <div class="w-[400px]"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="flex flex-col w-[400px] lg:max-w-[700px] justify-between items-start"> <div class="flex flex-col justify-between"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row my-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${renderComponent($$result2, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> </div> <div class="mt-2 mb-4 md:mb-0 text-gray-700 dark:text-gray-400">${description}</div> </div> <footer class="flex gap-x-4 "> ${githubFrontend && renderTemplate`${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": githubFrontend }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "GitHub", $$Github, { "class": "size-4" })}
Frontend
` })}`} ${githubBackend && renderTemplate`${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": githubBackend }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "GitHub", $$Github, { "class": "size-4" })}
Backend
` })}`} ${link && renderTemplate`${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Link", $$Link, { "class": "size-4" })}
Preview
` })}`} </footer> </div> </article>`)} </div> ` })}`;
}, "C:/Users/Admin/Portfolio/src/pages/proyects.astro", void 0);

const $$file = "C:/Users/Admin/Portfolio/src/pages/proyects.astro";
const $$url = "/proyects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
