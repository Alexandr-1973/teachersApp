Description

This is an application for a company offering online language tutoring services. The app consists of three pages:

	•	Home Page: Displays the company’s advantages and a link encouraging users to start using the app, which redirects them to the “Teachers” page.
	•	Teachers Page: Shows a list of teachers that users can filter by teaching language, student proficiency level, and hourly lesson price.
	•	Favorites Page (Private): Shows a list of teachers that the user has added to their favorites.

Functionality:

Using Firebase Realtime Database, the app integrates the ability for users to sign up, log in, retrieve their current profile, and log out. A collection of teachers is created in the Realtime Database with the following fields: name, surname, languages, levels, rating, reviews, price_per_hour, lessons_done, avatar_url, lesson_info, conditions, and experience.

According to the design 

(https://www.figma.com/design/dewf5jVviSTuWMMyU3d8Mc/Learn-Lingo?node-id=0-1&node-type=canvas&t=q0bEo3VyAGDoeOH8-0)

, the app features a teacher’s card with detailed characteristics. On the Teachers page, four cards are rendered initially, with more available by clicking the “Load more” button, which triggers a request to the database to load the next set of cards.

	•	If a non-authorized user clicks the heart-shaped button, a push notification appears informing them that this feature is available only for authorized users.
	•	For authorized users, the selected card is added to their favorites, and the color of the heart button changes.
	•	After refreshing the page, the card remains in the “favorite” state with the corresponding heart color.
	•	Upon a second click on the heart button, the card is removed from the favorites list, and the button returns to its original state.
	•	Clicking the Read more button expands the card, providing detailed information about the teacher and reviews from their students.
	•	Clicking the Book trial lesson button opens a modal window with a form for booking a trial lesson, where all fields are required.
	•	The modal window can be closed by clicking the cross button, the backdrop, or pressing the Esc key.

For authorized users, a private Favorites page is available where they can view all the teachers they have added to their favorites.

Technologies:

	•	HTML
	•	CSS
	•	JavaScript
	•	React
	•	Redux
	•	Firebase Realtime Database
