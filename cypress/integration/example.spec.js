const exampleTest = {
    html: `
      <h1 id=header>Main header</h1>
      <script>
        const header = document.getElementById("header")
        header.addEventListener('click', function () {
        console.log('This function is executed when clicking on the header.');
        });
       </script>
    `,
    test: `
      cy.get('h1').should('have.text', 'Main header')
    `
}

it('tests against a html example', () => {
    cy.runExample(exampleTest)
})