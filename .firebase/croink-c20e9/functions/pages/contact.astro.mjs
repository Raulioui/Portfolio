/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_CEIZ5UDn.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Cz0ysRSu.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "link": "layout", "title": "Contact Me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center m-auto text-white w-[90%] md:w-[40%]"> <h1 class="text-[#FACC15] md:mt-24  font-bold text-6xl mt-32">Contact Me</h1> <form action="https://api.web3forms.com/submit" method="POST" class="mt-20 text-left"> <input type="hidden" name="access_key"${addAttribute("326c104c-fc91-43ce-9d62-9ad080445120", "value")}> <div> <h2 class="text-left font-bold mb-4">Name</h2> <input name="name" type="text" required placeholder="Daniel" class="bg-[#212121] focus:outline-none rounded-lg px-6 border-stone-600 border py-4 w-full"> </div> <div> <h2 class="text-left mt-8  font-bold mb-4">E-mail</h2> <input name="email" required placeholder="daniel@gmail.com" type="email" class="bg-[#212121] focus:outline-none border-stone-600 border rounded-lg px-6 py-4 w-full"> </div> <div> <h2 class="text-left mt-8  font-bold mb-4">Message</h2> <textarea required name="message" class="resize-none h-[100px] border-stone-600 border w-full focus:outline-none bg-[#212121] px-6 py-4 rounded-lg"></textarea> </div> <div class="text-center"> <button class="bg-[#212121] cursor-pointer px-8 rounded-lg py-2  mt-16  focus:scale-90 hover:opacity-100 opacity-70  transition-all duration-200 ease-in-out font-bold text-white">Submit</button> </div> </form> </div> ` })}`;
}, "C:/Users/Admin/Portfolio/src/pages/contact.astro", void 0);
const $$file = "C:/Users/Admin/Portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
