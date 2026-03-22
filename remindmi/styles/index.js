document.getElementById("hero_title").textContent = "Take control of your life with RemindMi";
document.getElementById("hero_description").textContent = "Take control of your life with RemindMi, the intelligent scheduling assistant designed to bridge the gap between your busy calendar and your personal goals. By combining a smart AI agent with intuitive task management, we help you prioritize what matters most, ensuring you stay productive without the burnout. Experience a simplified way to manage your time, track your progress, and finally achieve the balance you’ve been looking for.";

const features = [
    {
        title: "Ai Scheduling",
        description: "Stop playing Tetris with your calendar. Our AI agent analyzes your habits and deadlines to automatically suggest the perfect time blocks for deep work, ensuring you get more done with less mental effort."
    },
    {
        title: "Goal Tracking",
        description: "Turn your long-term dreams into daily wins. Set major milestones and watch as RemindMi breaks them down into manageable steps, providing a visual progress bar to keep you motivated every step of the way."
    },
    {
        title: "Smart To-Do List and Reminders",
        description: "Never miss a beat with reminders that actually care. Our dynamic list prioritizes your tasks based on urgency and importance, sending you gentle nudges exactly when you need them most."
    }
];

const featureTitles = document.querySelectorAll(".feature_title")
const featureDescriptions = document.querySelectorAll(".feature_description")

features.forEach((feature, index) => {
    featureTitles[index].textContent = feature.title;
    featureDescriptions[index].textContent = feature.description;
});

// const featureTitles = document.querySelectorAll(".feature_title");
// const featureDescription = document.querySelectorAll(".feature_description")

// featureTitles[0].textContent = "Ai Scheduling";
// featureDescription[0].textContent = "Stop playing Tetris with your calendar. Our AI agent analyzes your habits and deadlines to automatically suggest the perfect time blocks for deep work, ensuring you get more done with less mental effort.";

// featureTitles[1].textContent = "Goal Tracking";
// featureDescription[1].textContent = "Turn your long-term dreams into daily wins. Set major milestones and watch as RemindMi breaks them down into manageable steps, providing a visual progress bar to keep you motivated every step of the way.";

// featureTitles[2].textContent = "Smart To-Do List and Redminders";
// featureDescription[2].textContent = "Never miss a beat with reminders that actually care. Our dynamic list prioritizes your tasks based on urgency and importance, sending you gentle nudges exactly when you need them most.";