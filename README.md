# FUT-Champions-Web-App

# Project Overview
The FUT Builder application allows users to create their own Ultimate Team by adding, positioning, and modifying players, while respecting tactical formations like 4-4-2 or 4-3-3. The application features an interactive interface with dynamic forms, player management through localStorage, and a user-friendly design that adapts to different screen sizes.

# *Features*
1. UI Integration & Dynamic Player Addition
Users can add players using a form with fields for player name, position, rating, statistics, and other relevant details.
Players are positioned according to the selected formation (e.g., 4-3-3 or 4-4-2).
2. Player Positioning Based on Selected Formation
The application supports common football formations and positions players accordingly:
4-3-3 Formation: 1 GK, 2 CB, 1 LB, 1 RB, 3 CM, 1 LW, 1 RW, 1 ST.
4-4-2 Formation: 1 GK, 2 CB, 1 LB, 1 RB, 2 CM, 1 RM, 1 LM, 2 ST.
Automatic adjustment of player positions when a different formation is selected.
3. Player Card Management
Add, edit, and remove player cards via a user interface.
The formation is limited to 11 players, with extra players stored as substitutes.
4. Dynamic Forms for Player Management
Allows for adding and removing players while respecting formation rules (maximum 11 main players, others as substitutes).
5. Team Chemistry Calculation (Bonus Feature)
Automatic chemistry score calculation based on factors like club links, league links, and nationality links.
Example of chemistry calculation:
A correctly positioned player gets 10 points.
Club link gives +3 points.
League link gives +4 points (2x2 for adjacent players).
Nationality link gives +1 point.
Total chemistry for the player is calculated and summed for the team, yielding a score between 0 and 100.
6. Form Validation
Ensures all fields (name, position, rating) are correctly filled before submitting.
Native validation for consistency and data accuracy.
7. LocalStorage for Team Data (Bonus)
The team and player data are saved in the browser’s localStorage for persistent storage.
On application reload, the saved formation and player data will be automatically loaded.
8. Drag & Drop Player Replacement (Bonus)
Players can be rearranged within the formation using drag-and-drop functionality.
9. Dynamic Formation Change (Bonus)
Switching formations updates the player positions and layout dynamically.
10. Responsive Design
The application is responsive and works well across different screen sizes, from desktops to tablets and mobile phones.
Player and formation layouts adjust dynamically to fit the screen.
Technologies Used
HTML: For structuring the web pages.
CSS: For styling the layout and UI elements (Tailwind CSS or Bootstrap may be used).
JavaScript (Vanilla): For DOM manipulation and functionality (e.g., dynamic forms, player management, localStorage).

*Usage*
Adding Players:

Use the form to add players by entering their name, position, rating, and other stats.
Choose the desired formation (4-3-3 or 4-4-2) to automatically position players.
Managing Players:

Drag and drop players to change their positions.
Add new players, or remove existing ones to ensure your formation has 11 players.
Calculating Chemistry:

Once players are positioned and linked, the chemistry score will be displayed for the team.
Higher chemistry leads to better team performance.
Saving Team Data:

The team configuration is saved in localStorage, so when you reopen the app, your team and formation will persist.
Responsive Design:

Try resizing your browser window or use different devices to see how the application adapts to various screen sizes.
