
//get all mood options
const moodOptions = document.querySelectorAll('.mood-option')

//get moodRecords if available in localstorage or declare as empty object
let moodRecords = JSON.parse(localStorage.getItem("moodRecords")) || {}

//add event listener on each mood
moodOptions.forEach((mood) => {
    mood.addEventListener("click", (e) => {
        const selectedMood = mood.innerHTML
        const currentDate = new Date()
        console.log(typeof currentDate)

        moodRecords[currentDate] = selectedMood
        localStorage.setItem("moodRecords", JSON.stringify(moodRecords));
    })
})

// const timelineBtn = document.querySelectorAll(".timeline-btn")

// timelineBtn.forEach((type) => {
//     type.addEventListener("click", (e) => {
//         createMoodTimeline(type.innerHTML)
//     })
// })


const dayTimeline = document.getElementById("day-timeline")

for (const mood in moodRecords) {
    const moodRow = document.createElement("div")
    
    const moodTime = document.createElement("span")
    moodTime.innerHTML = new Date(mood).toTimeString().split(' ')[0]
    
    const moodValue = document.createElement("span")
    moodValue.innerHTML = moodRecords[mood]
    
    moodRow.appendChild(moodTime)
    moodRow.appendChild(moodValue)
    dayTimeline.appendChild(moodRow)
}  

const dayBtn = document.getElementById("day-btn")

dayBtn.addEventListener("click", (e) => {
    dayTimeline.classList.remove("hidden")
    weekTimeline.classList.add("hidden")
    monthTimeline.classList.add("hidden")
})


const weekTimeline = document.getElementById("week-timeline")

for (const mood in moodRecords) {
    const moodRow = document.createElement("div")
    
    const moodTime = document.createElement("span")
    moodTime.innerHTML = new Date(mood).toTimeString().split(' ')[0]
    
    const moodValue = document.createElement("span")
    moodValue.innerHTML = moodRecords[mood]
    
    moodRow.appendChild(moodTime)
    moodRow.appendChild(moodValue)
    weekTimeline.appendChild(moodRow)
}  

const weekBtn = document.getElementById("week-btn")

weekBtn.addEventListener("click", (e) => {
    dayTimeline.classList.add("hidden")
    weekTimeline.classList.remove("hidden")
    monthTimeline.classList.add("hidden")
})


const monthTimeline = document.getElementById("month-timeline")

for (const mood in moodRecords) {
    const moodRow = document.createElement("div")
    
    const moodTime = document.createElement("span")
    moodTime.innerHTML = new Date(mood).toTimeString().split(' ')[0]
    
    const moodValue = document.createElement("span")
    moodValue.innerHTML = moodRecords[mood]
    
    moodRow.appendChild(moodTime)
    moodRow.appendChild(moodValue)
    monthTimeline.appendChild(moodRow)
}  

const monthBtn = document.getElementById("month-btn")

monthBtn.addEventListener("click", (e) => {
    dayTimeline.classList.add("hidden")
    weekTimeline.classList.add("hidden")
    monthTimeline.classList.remove("hidden")
})