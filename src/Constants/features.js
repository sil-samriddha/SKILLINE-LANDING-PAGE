const features = [
    {
        id: 1,
        title : "<span>Tools<span> For Teachers And Learners",
        description: "Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.",
        image: "Images/comp2.png"
    },
    {
        id: 2,
        title : "Assessments, <span>Quizzes<span>, Tests",
        description: "Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.",
        image: "Images/comp3.png"
    },
    {
        id: 3,
        title : "<span>Class Management <span>Tools for Educators",
        description: "Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.",
        image: "Images/comp4.png"
    },
    {
        id: 4,
        title : "One-on-One <span>Discussions<span>",
        description: "Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.",
        image: "Images/comp5.png"
    }
]

const extras = [
    {
        id : 1,
        subject : "INTEGRATIONS",
        title : "200+ educational tools and platform <span>integrations<span>",
        description : [
            "Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms."
        ],
        button : "See All Integrations",
        images : [
            {
                key: 1,
                img : "Icons/onedrive.png"
            },
            {
                key: 2,
                img : "Icons/dropbox.png"
            },
            {
                key: 3,
                img : "Icons/drive.png"
            },
            {
                key: 4,
                img : "Icons/teams.png"
            }
        ]
    },
    {
        id : 2,
        subject : "TESTIMONIAL",
        title : "What They <span>Say<span>?",
        description : [
            "Skilline has got more than 100k positive ratings from our users around the world.",
            "Some of the students and teachers were greatly helped by the Skilline.",
            "Are you too? Please give your assessment"
        ],
        button : "Write your assessment",
        images : [
            {
                key: 1,
                img : "Images/extras-img.png"
            },
            {
                key: 2,
                img : "Images/feature-comment.png"
            }
        ]
    }
]

export {features, extras};