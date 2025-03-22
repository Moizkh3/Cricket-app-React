function shuffleNames() {
    let input = document.getElementById("nameInput").value.trim();
    let names = input.split("\n").filter(name => name.trim() !== "");

    if (names.length > 1) {
        names = fisherYatesShuffle(names);
        displayShuffledNames(names);
    } else {
        alert("Please enter at least two names.");
    }
}

// Fisher-Yates Shuffle Algorithm (Proper Randomization)
function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayShuffledNames(names) {
    let list = document.getElementById("shuffledList");
    list.innerHTML = "";
    list.classList.remove("fade-in"); // Reset animation

    setTimeout(() => {
        names.forEach(name => {
            let li = document.createElement("li");
            li.textContent = name.trim();
            list.appendChild(li);
        });

        list.classList.add("fade-in"); // Add animation
    }, 50);
}
