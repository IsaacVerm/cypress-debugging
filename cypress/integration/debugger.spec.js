const exampleTest = {
    html: `
      <h1 id=header>Main header</h1>
    `,
    test: `
      cy.get('h1').should('have.text', 'Main header').debug()
    `
}

it('tests against a html example', () => {
    cy.runExample(exampleTest)
})