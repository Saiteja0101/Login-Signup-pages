// Array of chat member data
const chatMembersData = [
    { name: "user 1 ", message: "hello borther", lastSeen: "00:52", profilePic: "media/profilePic.png" },
    { name: "user 2", message: "Ready for battle!", lastSeen: "23:45", profilePic: "media/profilePic.png" },
    { name: "user 3", message: "On a mission!", lastSeen: "23:00", profilePic: "media/profilePic.png" },
    { name: "user 4", message: "heyy!", lastSeen: "22:32", profilePic: "media/profilePic.png" },
    { name: "user 5", message: "how are you!", lastSeen: "21:21", profilePic: "media/profilePic.png" },
    { name: "user 6", message: "you: hi", lastSeen: "19:56", profilePic: "media/profilePic.png" },
    { name: "user 7", message: "you: wru", lastSeen: "15:39", profilePic: "media/profilePic.png" },
    { name: "user 8", message: "hii", lastSeen: "10:45", profilePic: "media/profilePic.png" },
    { name: "user 9", message: "you: thats cool", lastSeen: "yesterday", profilePic: "media/profilePic.png" },
    { name: "user 10", message: "Hru", lastSeen: "yesterday", profilePic: "media/profilePic.png" },
    { name: "user 11", message: "good", lastSeen: "15-12-2024", profilePic: "media/profilePic.png" },
    { name: "user 12", message: "okay", lastSeen: "15-12-2024", profilePic: "media/profilePic.png" },
    // Add more members as needed
];

const chatMembersContainer = document.querySelector(".chatMembers");

function createChatMember(member) {
    const memberDiv = document.createElement("div");
    memberDiv.className = "member flex items-center mb-4 text-black hover:bg-amber-100 rounded-[5px] px-[1rem] py-[1rem] cursor-default";

   memberDiv.innerHTML = `
    <div class="flex items-center justify-between w-full">
    <div class="flex items-center">
        <img src="${member.profilePic}" alt="profilePic" class="h-12 mr-4 bg-white rounded-full">
        <div class="grid">
            <h3 class="text-uName text-black">${member.name}</h3>
            <p class="text-msg min-w-fit max-w-full">${member.message}</p>
        </div>
    </div>
    <p class="text-last">${member.lastSeen}</p>
</div>
`;


    return memberDiv;
}

chatMembersData.forEach(member => {
    const memberElement = createChatMember(member);
    chatMembersContainer.appendChild(memberElement);
});

// message container
const allMemberContainers = document.querySelectorAll('.member');
const userNameDisplay = document.querySelector('.user_name');

allMemberContainers.forEach((member) => {
    member.addEventListener('click', () => {
        const nameElement = member.querySelector('.text-uName');
        userNameDisplay.textContent = nameElement.textContent;
    });
});

// changing audio icon to send icon when user enter input
const messageInput = document.getElementById("message_input");
const icon = document.getElementById("audio");

messageInput.addEventListener("input", () => {
    if (messageInput.value.trim() !== "") {
        icon.src = "/media/send.png";
    } else {
    icon.src = "/media/audio.png";
    }
});




// for chats, group,calls and status
const goToPage = (url) => {
    window.location.href = url;
};