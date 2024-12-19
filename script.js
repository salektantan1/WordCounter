// دالة عد الكلمات والأحرف
function countWordsAndCharacters() {
    const text = document.getElementById('textInput').value;

    // عد الكلمات
    const wordCount = text.trim().split(/\s+/).length;
    if (text.trim() === '') {
        document.getElementById('wordCountDisplay').innerText = 'Words: 0';
    } else {
        document.getElementById('wordCountDisplay').innerText = 'Words: ' + wordCount;
    }

    // عد الأحرف (إزالة الفراغات)
    const charCount = text.replace(/\s/g, '').length;
    document.getElementById('charCountDisplay').innerText = 'Characters: ' + charCount;
}
