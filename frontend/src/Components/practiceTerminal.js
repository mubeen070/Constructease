function students(id) {
    courses(id);
    function courses(id) {
        const courses = ["Web", "Stats"];
        console.log("Registered courses are " + courses);
    }
}


students("SP19-BSE-000");

// 1. callback approach

getCourses("SP21-BSE-000", (courseInfo) => {
    getCreditHours(courseInfo.course, (creditHoursInfo) => {
        console.log(creditHoursInfo);
    });
});

function getCourses(id, callback) {
    setTimeout(() => {
        callback({ id: id, course: "Web Technologies" });
    }, 2000);
}

function getCreditHours(course, callback) {
    setTimeout(() => {
        callback({ course: course, creditHours: 3 });
    }, 2000);
}


// 2. Promise based approach
getCourses("SP21-BSE-000")
    .then(courseInfo => getCreditHours(courseInfo.course))
    .then(creditHoursInfo => console.log(creditHoursInfo))
    .catch(() => console.log("Couldn't find data."));

function getCourses(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: id, course: "Web Technologies" });
        }, 2000);
    })
}

// 3. Async and Await based approach
async function credits() {
    try {
        const coursesInfo = await getCourses("SP21-BSE-000");
        const creditHours = await getCreditHours(coursesInfo.course);
        console.log(creditHours);
    } catch (error) {
        console.log("Couldn't find data.");
    }
}

credits();


function getCourses(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: id, course: "Web Technologies" });
        }, 2000);
    })
}

function getCreditHours(course) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ course: course, creditHours: 3 });
        }, 2000);
    })
}


// Normally

const insertController = async (req, res) => {
    const saveData = "Node JS code to save the data.";
    await saveData.save();
}