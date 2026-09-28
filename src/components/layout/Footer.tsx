export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-900">درباره ما</a>
            <a href="#" className="hover:text-gray-900">تماس با ما</a>
            <a href="#" className="hover:text-gray-900">حریم خصوصی</a>
            <a href="#" className="hover:text-gray-900">قوانین و مقررات</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-lg bg-gray-100" />
            <div className="h-10 w-10 rounded-lg bg-gray-100" />
          </div>
        </div>

        <p className="mt-6 text-center text-[11px] text-gray-400">
          © ۱۴۰۴ تمام حقوق برای م دادپ محفوظ است.
        </p>
      </div>
    </footer>
  );
}