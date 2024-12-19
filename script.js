// دالة عد الكلمات والأحرف
function countWordsAndCharacters() {
    const text = document.getElementById('textInput').value;

    // عد الكلمات
    const wordCount = text.trim().split(/\s+/).length;
    // إذا كانت النص فارغًا، وضع العدد على صفر
    if (text.trim() === '') {
        document.getElementById('wordCountDisplay').innerText = 'Words: 0';
    } else {
        document.getElementById('wordCountDisplay').innerText = 'Words: ' + wordCount;
    }

    // عد الأحرف
    const charCount = text.replace(/\s/g, '').length; // إزالة الفراغات من النص لحساب الأحرف فقط
    document.getElementById('charCountDisplay').innerText = 'Characters: ' + charCount;
}
