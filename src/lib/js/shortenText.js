

export default function shortenText(txt, chars = 15, addDots = false) {
    let shortenedText = txt.slice(0, chars);
    if (addDots && txt.length > chars) {
        shortenedText = shortenedText.slice(0, -3) + '...';
    }
    return shortenedText;
}
