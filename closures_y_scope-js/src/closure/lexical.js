// Ámbito léxico en closures clase 7
const builtCount = (i) => {
    let count = i
    const displayCount = () => {
        console.log(count++)
    }
    return displayCount
}

const myCount = builtCount(1)

myCount()
myCount()
myCount()

const myOtherCount = builtCount(10)

myOtherCount()
myOtherCount()
myOtherCount()