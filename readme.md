# Hatsa code assignment
Hello! To get a feeling for your current skills regarding our frontend stack, you've been requested to do this assignment. The assignment should take no longer than 1-2 hours to complete. Try to complete everything within this time, getting it to work first, then make it better if you have some time left.

## Getting started
1. Create a private repository on GitHub
2. Clone this repository locally in the regular way
3. Change the `origin` remote url to your private repository and push
4. Add `florisvink` and `bvangraafeiland` as collaborators to your repository
5. Install dependencies using `yarn`

The application can then be started with `yarn dev`. This starts the NextJS development server on http://localhost:3000.

## The assignments
The assignments can be done in any order you like, but try to complete all of them. Use TypeScript features wherever applicable to indicate how experienced you are with it. 

### API requests
In `/search`, you'll find the boilerplate for a simple version of our product search. A function to fetch the results is provided, as well as a basic way to display the results. Implement two versions of this search:
- Client side - fetch the data as the page is rendered in the browser
- Server side - fetch the data before 

You can copy the provided file to implement both versions.

**Bonus**: improve the styling of the results list.

### Performance issues
On `/profile` you can find a basic profile form. It seems to be a little slow to respond to input! 

Find out why this is the case and refactor the code to improve the responsiveness. For this you can edit the `profile.tsx` and `FormInput.tsx` files, but you may not remove the `wait(50)` statement which slows the rendering of the input field.

Explain how you found the issue and what you did to resolve it.

### Button component
In `components/Button.tsx` you'll find a starting point for a button component. Implement the design of the button found [here](https://www.sketch.com/s/d9aab920-a4c4-40fc-bbb5-894053afd607/a/xr2p1M5#Inspector). Use [TailwindCSS](https://tailwindcss.com/) for the styling - it has been set up in the project already.

The component should receive props to allow for different variants:
- Color
- Size
- Regular (with background color) or outline (white background with a colored border)

The colors should change based on the button state (default, hover and active). To test this component, you can create a new page, or refer to the bonus objective.

**Bonus**: create stories for the button component. [Storybook](https://storybook.js.org/docs/react/get-started/introduction) has been set up in the project already.  
