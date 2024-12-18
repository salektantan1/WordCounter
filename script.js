document.getElementById("text-input").addEventListener("input", function () {
  const text = this.value;

  // حساب عدد الكلمات
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // حساب عدد الحروف
  const chars = text.length;

  // تحديث النتائج
  document.getElementById("word-count").textContent = words;
  document.getElementById("char-count").textContent = chars;
});
