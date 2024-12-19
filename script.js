// دالة عد الكلمات
function countWords() {
    const text = document.getElementById('textInput').value;
    const wordCount = text.trim().split(/\s+/).length;
    
    // إذا كانت النص فارغًا، وضع العدد على صفر
    if (text.trim() === '') {
        document.getElementById('wordCountDisplay').innerText = 'Words: 0';
    } else {
        document.getElementById('wordCountDisplay').innerText = 'Words: ' + wordCount;
    }
}
