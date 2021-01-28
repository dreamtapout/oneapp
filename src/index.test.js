import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'


//Method of retrieving an HTML Document
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8'); 


//Using 'let' to define variable that is limited to the block it is declared in vs globally
let dom
let container 

//created 'beforeEach' method. Used JSDom Library to parse and insrpect the HTML code
describe('index.html', () => {
    beforeEach (() => {
        dom= new JSDOM(html, {runScripts: 'dangerously'})
        container= dom.window.document.body
    })

//Header on the page testing. Expect the Header to be there
it('renders Heading Element', () => {
    expect(container.querySelector('h1')).not.toBeNull()
    expect(getByText(container, 'One Page App')).toBeInTheDocument()
})

//Button on the page testing. Expect the button to be there
it('renders a Button element', () => {
    expect(container.querySelector('button')).not.toBeNull()
    expect(getByText(container, 'Pick Me Please!')).toBeInTheDocument()
  })

  // Button is constant and inside of the button is "Pick Me Please" text
  //Onclick result should match the object, which is Hello I Am Here
 it('renders a new hello text on a separate line onclick', async () =>{
     const button = getByText(container, 'Pick Me Please!')

    fireEvent.click(button)
    let clickedResults = container.querySelectorAll('p') //query select all select everything from the query.One the response and the other is the title
    expect(clickedResults[1]).toMatchObject(/Hello I Am Here/);
    
  })
 })