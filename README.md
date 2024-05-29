# Digital Clock

This project is a simple digital clock created using HTML, CSS, and JavaScript. The clock displays the current time with hours, minutes, and seconds in a stylish format and updates every second.

![image](https://github.com/LakinduNimesh/digital-clock/assets/149768006/d76ddda9-6c8c-41ac-b6dd-2a0253aa1271)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [License](#license)

## Features
- Displays the current time in `HH : MM : SS` format.
- Time is updated every second.
- Uses a beautiful background image with a gradient overlay.
- Responsive design, works on various screen sizes.
- Styled using Google Fonts.

## Technologies Used
- HTML
- CSS
- JavaScript

## Installation
To set up this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/LakinduNimesh/digital-clock.git
    ```
2. Navigate to the project directory:
    ```bash
    cd digital-clock
    ```
3. Open `index.html` in your favorite web browser.

## Usage
Once you open `index.html`, the digital clock will display the current time and update every second.

## Customization
You can customize the digital clock according to your preferences. Here are some possible customizations:

### Background Image
To change the background image, update the `background-image` property in the `style.css` file:
```css
body {
  background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4, 9, 30, 0)), url('path/to/your/image.png');
}
```

### Font Style
To change the font style, you can modify the Google Fonts import link in the `style.css` file:
```css
@import url('https://fonts.googleapis.com/css2?family=YourChosenFont&display=swap');
```
And update the `font-family` property:
```css
body {
  font-family: 'YourChosenFont', sans-serif;
}
```

### Clock Style
To change the clock style, you can modify the `.digital-clock` and `span` styles in the `style.css` file. For example, to change the clock's text color:
```css
span {
  color: #yourColor;
}
```

## License
This project is open source and available under the [MIT License](LICENSE).

---

Feel free to contribute to this project by submitting issues or pull requests. If you have any questions or suggestions, please contact [Email](nimeshlakindu01@gmail.com).
