export default function FooterLinkColumn({ title, links = [] }) {
    return (
      <div className="text-center" dir="rtl">
        <h4 className="mb-3 text-sm font-medium text-gray-800">{title}</h4>
        <ul className="space-y-2">
          {links.map((txt, i) => (
            <li key={i}>
              <a href="#" className="text-sm text-gray-600 hover:text-black transition">
                {txt}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  