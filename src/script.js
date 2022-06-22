

const nasaKey = 'ebu1N1nhxqROu25PIhdbI4BRRaFj2Mo2glR58BkA'
const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`


const getNasaData = async () => {
    const response = await fetch(apodUrl)
    const data = await response.json()
    console.log(data)
    displayInfo(data)
    
}

const displayInfo = (data) => {
    const imgOfTheDay = document.createElement('img')
    const imageUrl = data.url
        // imgOfTheDay.src = imageUrl
        // imgOfTheDay.style.width="50%"
    const body = document.querySelector("body")
        body.style.backgroundColor='black'
        body.style.backgroundImage=`url(${imageUrl})`
        body.style.backgroundSize="100vw"
        body.style.backgroundRepeat="no-repeat"
    const title = document.createElement('h2')
        title.textContent = data.title
        title.style.color="white"
    const explaination = document.createElement('p')
        explaination.textContent = data.explanation 
        explaination.style.color="white"
        explaination.style.width="75%"
        explaination.style.maxWidth="75vw"
        explaination.style.fontSize="1.0rem"
        explaination.style.lineHeight="2.0rem"
        explaination.style.position="relative"
    const date = document.createElement('div')
        date.textContent = data.date
        date.style.color="white"
        date.style.margin="20px 0 0 0px"
    const copyright = document.createElement('p')
        copyright.textContent = `©  ${data.copyright}`
        copyright.style.position="absolute"
        copyright.style.bottom="20px"
        copyright.style.left="80px"
        copyright.style.fontSize="10px"
        copyright.style.color = "white"
        copyright.style.transform="rotate(-90deg) translateX(85px) translateY(-60px)"
    const container = document.querySelector("#nasaIOTD")
        container.style.position="absolute"
        container.style.bottom="0vh"
        container.style.margin=" 0 3rem 3rem 3rem "
        container.style.width="86%"
        container.style.padding="20px"
        container.style.background="rgba(0, 0, 0, 0.5)"
        container.appendChild(imgOfTheDay)
        container.appendChild(title)
        container.appendChild(explaination)
        container.prepend(date)
        body.appendChild(copyright)
        
}

getNasaData()