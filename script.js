
//get all mood options
const moodOptions = document.querySelectorAll('.mood-option')

//get moodRecords if available in localstorage or declare as empty object
let moodRecords = JSON.parse(localStorage.getItem("moodRecords")) || []

//add event listener on each mood
moodOptions.forEach((mood) => {
    mood.addEventListener("click", (e) => {
        const selectedMood = mood.innerHTML
        const currentDate = new Date()

        const moodLog = { date: currentDate, moodValue: selectedMood}

        moodRecords.push(moodLog)
        localStorage.setItem("moodRecords", JSON.stringify(moodRecords));
        createMoodTimeline()
    })
})
const dayTimeline = document.getElementById("day-timeline")

function createMoodTimeline() {
    dayTimeline.innerHTML = ''

    moodRecords.forEach((row) => {
        const moodRow = document.createElement("div")
        moodRow.classList.add('mood-row')
        
        const moodTime = document.createElement("span")
        moodTime.innerHTML = new Date(row.date).toTimeString().split(' ')[0]
        
        const moodValue = document.createElement("span")
        moodValue.innerHTML = row.moodValue
        
        moodRow.appendChild(moodTime)
        moodRow.appendChild(moodValue)
        dayTimeline.appendChild(moodRow)
    })
}

const resetBtn = document.getElementById("reset-timeline")
resetBtn.addEventListener("click", (e) => {
    localStorage.clear()
    moodRecords = []
    dayTimeline.innerHTML = ''

})

createMoodTimeline()