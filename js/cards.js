// total card count
const cards = document.querySelectorAll(".card");
document.getElementById("totalCount").innerText = cards.length;

let interviewCount = 0;
let rejectedCount = 0;

const interviewCountElement = document.getElementById("interViewCount");
const rejectedCountElement = document.getElementById("rejectedCount");

// loop through all cards
cards.forEach(card => {

    const interviewBtn = card.querySelector(".interview-btn");
    const rejectedBtn = card.querySelector(".rejected-btn");


    const notApplied = card.querySelector(".not-applied");
    const interviewStatus = card.querySelector(".interview-status");
    const rejectedStatus = card.querySelector(".rejected-status");


    // interview button
    interviewBtn.addEventListener("click", function () {

        if (!card.classList.contains("interviewed")) {

            
            if (card.classList.contains("rejected")) {
                rejectedCount--;
                rejectedCountElement.innerText = rejectedCount;
                card.classList.remove("rejected");
            }

            interviewCount++;
            interviewCountElement.innerText = interviewCount;

            card.classList.add("interviewed");
        }
        notApplied.classList.add("hidden");
        rejectedStatus.classList.add("hidden");
        interviewStatus.classList.remove("hidden");
    });

        // rejected button
    rejectedBtn.addEventListener("click", function () {

        if (!card.classList.contains("rejected")) {

           
            if (card.classList.contains("interviewed")) {
                interviewCount--;
                interviewCountElement.innerText = interviewCount;
                card.classList.remove("interviewed");
            }

            rejectedCount++;
            rejectedCountElement.innerText = rejectedCount;

            card.classList.add("rejected");
        }
        notApplied.classList.add("hidden");
        interviewStatus.classList.add("hidden");
        rejectedStatus.classList.remove("hidden");
    });

});