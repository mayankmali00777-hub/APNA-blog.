const posts = [
    {
        title: "How Technology Helps Students",
        description: "Technology can make studying, research and communication easier.",
        author: "Aarav Patel",
        date: "September 10, 2026",
        category: "Technology",
        content: "Technology gives students many useful tools for learning. Online documents, educational software and simple note-taking applications can help students organize their work. The most important thing is to use technology as a learning tool instead of allowing it to become a distraction."
    },
    {
        title: "What Is Programming?",
        description: "A simple introduction to programming and how computers follow instructions.",
        author: "Riya Shah",
        date: "September 8, 2026",
        category: "Programming",
        content: "Programming is the process of writing instructions that a computer can understand. Languages such as JavaScript, Python and Java allow people to create websites, applications and other useful software. Beginners should start with small programs and practice regularly."
    },
    {
        title: "Understanding Artificial Intelligence",
        description: "Learn the basic idea behind AI without complicated technical terms.",
        author: "Kabir Mehta",
        date: "September 5, 2026",
        category: "AI",
        content: "Artificial intelligence is a technology that allows computers to perform tasks that normally require human-like abilities. AI can recognize patterns, understand text and help generate content. Learning the basics of AI is useful because it is becoming part of many everyday technologies."
    },
    {
        title: "Build Your First Web Page",
        description: "Learn how HTML, CSS and JavaScript work together.",
        author: "Neha Desai",
        date: "September 2, 2026",
        category: "Web Development",
        content: "A basic website can be created with three main technologies. HTML creates the structure, CSS controls the design and JavaScript adds interaction. Start with a simple page containing a heading, paragraph and button. Then slowly add new features as your skills improve."
    },
    {
        title: "Simple Tips for Better Coding",
        description: "Small habits that can help beginners write cleaner code.",
        author: "Arjun Kumar",
        date: "August 29, 2026",
        category: "Coding Tips",
        content: "Beginners can improve their coding by practicing regularly, using clear variable names and keeping programs simple. When something does not work, read the error carefully instead of immediately changing many things. Building small projects is also a great way to understand programming."
    },
    {
        title: "Balancing College and Personal Time",
        description: "Simple ways students can organize their study and free time.",
        author: "Maya Joshi",
        date: "August 25, 2026",
        category: "Student Life",
        content: "Student life can become busy when classes, assignments and personal activities happen at the same time. Creating a simple daily plan can help. Set realistic goals, take short breaks and make enough time for sleep and hobbies. Good planning can make student life less stressful."
    }
];

const postsContainer = document.getElementById("posts");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const categoryButtons = document.querySelectorAll(".category-button");

const postModal = document.getElementById("postModal");
const closeButton = document.getElementById("closeButton");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalInfo = document.getElementById("modalInfo");
const modalContent = document.getElementById("modalContent");

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const themeButton = document.getElementById("themeButton");

let selectedCategory = "All";

function showPosts() {
    const searchText = searchInput.value.toLowerCase();

    postsContainer.innerHTML = "";

    const filteredPosts = posts.filter(function(post) {
        const matchesSearch = post.title.toLowerCase().includes(searchText);
        const matchesCategory =
            selectedCategory === "All" ||
            post.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    if (filteredPosts.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    filteredPosts.forEach(function(post) {
        const card = document.createElement("div");

        card.className = "post-card";

        card.innerHTML = `
            <span class="post-category">${post.category}</span>
            <h3>${post.title}</h3>
            <p class="post-description">${post.description}</p>
            <p class="post-info">${post.author} · ${post.date}</p>
            <button class="read-button">Read More</button>
        `;

        const button = card.querySelector(".read-button");

        button.addEventListener("click", function() {
            openPost(post);
        });

        postsContainer.appendChild(card);
    });
}

function openPost(post) {
    modalCategory.textContent = post.category;
    modalTitle.textContent = post.title;
    modalInfo.textContent = post.author + " · " + post.date;
    modalContent.textContent = post.content;

    postModal.style.display = "block";
}

function closePost() {
    postModal.style.display = "none";
}

searchInput.addEventListener("input", showPosts);

categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        categoryButtons.forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        showPosts();
    });
});

closeButton.addEventListener("click", closePost);

postModal.addEventListener("click", function(event) {
    if (event.target === postModal) {
        closePost();
    }
});

menuButton.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});

showPosts();
