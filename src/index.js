module.exports = function toReadable (number) {
 const unitsPlusTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tys = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';

    if (number < 11) return unitsPlusTen[number];
    if (number >= 11 && number < 20) return teens[getTeen(number) - 1];
    if (number >= 20 && number < 100) return getTys(number);
    if (number === 100) return `${unitsPlusTen[1]} ${hundred}`;
    if (number > 100 && number < 1000) return getHundreds(number);

    function getTeen(num) {
        return (num % 10);
    }

    function getTys(num) {
        let tysNum = Math.floor(num / 10);
        let unitsNum = num % 10;
        return unitsNum === 0 ? `${tys[tysNum - 2]}` : `${tys[tysNum - 2]} ${unitsPlusTen[unitsNum]}`;
    }

    function getHundreds(num) {
        let hundredNum = Math.floor(num / 100);
        let remaining = num % 100;
        let result = `${unitsPlusTen[hundredNum]} ${hundred}`;

        if (remaining > 0) {
            if (remaining >= 1 && remaining <= 10) {
                result += ` ${unitsPlusTen[remaining]}`;
            } else if (remaining >= 11 && remaining < 20) {
                result += ` ${teens[getTeen(remaining) - 1]}`;
            } else {
                result += ` ${getTys(remaining)}`;
            }
        }
        return result;
    }
}
