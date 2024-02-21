import Root from "./pages/Root";

function App() {
  return (
    <div className="h-svh w-full bg-slate-50 p-12 dark:bg-stone-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center overflow-hidden">
        <div className="flex w-[108rem] flex-none justify-end">
          <picture>
            <source
              srcSet="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
              type="image/avif"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
              alt=""
              className="w-[71.75rem] max-w-none flex-none dark:hidden"
              decoding="async"
            />
          </picture>
          <picture>
            <source srcSet="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif" />
            <img
              src="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
              alt=""
              className="hidden w-[90rem] max-w-none flex-none dark:block"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <div className="z-10 h-full w-full rounded-xl border-2 border-slate-600/20 bg-white/5 shadow backdrop-blur-xl">
        <Root />
      </div>
    </div>
  );
}

export default App;
