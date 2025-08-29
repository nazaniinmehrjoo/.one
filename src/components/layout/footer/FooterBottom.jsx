export default function FooterBottom({ text }) {
    return (
      <>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 py-10">
            <span aria-hidden className="h-px bg-gray-300 flex-1" />
            <span className="text-[14px] text-gray-600 whitespace-nowrap text-center">{text}</span>
            <span aria-hidden className="h-px bg-gray-300 flex-1" />
          </div>
        </div>
 
      </>
    );
  }
  