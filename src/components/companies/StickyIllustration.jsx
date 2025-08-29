export default function StickyIllustration({ src, alt = "One Tower" }) {
  return (
    <aside className="hidden xl:block relative self-stretch">
      <div className="sticky top-24">
        <img src={src} alt={alt} className="w-full h-auto object-contain" />
      </div>
    </aside>
  );
}
