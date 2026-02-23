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

function handleStatus(btn, status){
    const card = btn.closest('.card');
    card.dataset.status = status;
}


function hanldeFilter(type, btn){
    cards.forEach(card => {
        if(type === card.dataset.status || type === 'all'){
            card.classList.remove('hidden');
        }else{
            card.classList.add('hidden');
        }
    });

    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(button => {
        button.classList.remove('bg-blue-800', 'text-white');
        button.classList.add('bg-gray-300');
    });

    btn.classList.remove('bg-gray-300');
    btn.classList.add('bg-blue-800', 'text-white');
    updateAvailableCount(type);
}


const availableCount = document.getElementById("availableCount");

function updateAvailableCount(type){
    const total = cards.length;
    let visibleCount = 0;
    cards.forEach(card => {
        if(type === 'all' || card.dataset.status === type){
            visibleCount++;
        }
    });

    if(type === 'all'){
        availableCount.innerText = total + " Jobs";
    }else{
        availableCount.innerText = visibleCount + " of " + total + " Jobs ";
    }
}
updateAvailableCount('all');


document.addEventListener("click", function (e) {

    if (e.target.classList.contains("fa-xmark")) {

        const card = e.target.closest(".card");

        const notApplied = card.querySelector(".not-applied");
        const interviewStatus = card.querySelector(".interview-status");
        const rejectedStatus = card.querySelector(".rejected-status");

        
        if (card.classList.contains("interviewed")) {
            interviewCount--;
            interviewCountElement.innerText = interviewCount;
            card.classList.remove("interviewed");
        }

        
        if (card.classList.contains("rejected")) {
            rejectedCount--;
            rejectedCountElement.innerText = rejectedCount;
            card.classList.remove("rejected");
        }

       
        card.dataset.status = "all";
        interviewStatus.classList.add("hidden");
        rejectedStatus.classList.add("hidden");
        notApplied.classList.remove("hidden");

        const activeBtn = document.querySelector(".filter-btn.bg-blue-800");
        const type = activeBtn ? activeBtn.textContent.trim().toLowerCase() : "all";
        updateAvailableCount(type);
    }
});