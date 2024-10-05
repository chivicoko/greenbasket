"use client";

import useScrollVisibility from '@/hooks/useScrollVisibility';

export default function ScrollToTopButton() {
  const isVisible = useScrollVisibility(100);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-[#bbea70] hover:bg-[#bbea70d3] rounded-full text-[#064f38] text-2xl p-3 hover:cursor-pointer shadow-lg transition"
      >
        ↑
      </button>
    )
  );
}
