function countText() {
    var text = document.getElementById("textInput").value;
    
    var wordCount = text.trim().split(/\s+/).length;
    if (text.trim() === "") wordCount = 0;
    
    var charCount = text.length;

    document.getElementById("wordCount").textContent = wordCount;
    document.getElementById("charCount").textContent = charCount;
}
