describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://job.danskebank.lt/jobs/')
  })

  context("Page verifications", () => {
    it('Verify that home page opened successfully', () => {
      cy.get('.header__logo')
        .should('exist')
    })

    it('Open "All the advantages" page', () => {
      cy.get('.header__menu')
        .find('a')
        .eq(0)
        .click({ force: true })
      cy.location("pathname").should("equal", "/all-the-advantages/")
    })

    it('Open "Get to know us better" page', () => {
      cy.get('.header__menu')
        .find('a')
        .eq(1)
        .click({ force: true })
      cy.location("pathname").should("equal", "/get-to-know-us-better/")
    })

    it('Open "The reasons why" page', () => {
      cy.get('.header__menu')
        .find('a')
        .eq(2)
        .click({ force: true })
      cy.location("pathname").should("equal", "/the-reasons-why/")
    })
  })

  context("Search field tests", () => {
    it('User searches for a job via dropdown and selects it', () => {
      cy.get(':nth-child(1)')
        .get('.select2')
        .get('.selection')
        .get('.select2-selection')
        .eq(0)
        .click()
      cy.get('.select2-results')
        .contains('IT Infrastructure').click()
      cy.get('.select2-selection__choice')
        .eq(0)
        .contains('IT Infrastructure')

      cy.get(':nth-child(1)')
        .get('.select2')
        .get('.selection')
        .get('.select2-selection')
        .eq(1)
        .click()
      cy.get('.select2-results')
        .contains('Chief')
        .click()
      cy.get('.select2-selection__choice')
        .eq(1)
        .contains('Chief')

      cy.get(':nth-child(1)')
        .get('.select2')
        .get('.selection')
        .get('.select2-selection')
        .eq(2)
        .click()
      cy.get('.select2-results')
        .contains('Upper-Intermediate')
        .click()
      cy.get('.select2-selection__choice')
        .eq(2)
        .contains('Upper-Intermediate')

      cy.get('.block-jobs__content')
        .contains('Chief Consultant (with Analytical background) in Performance Management and Traction Team')
        .click()
      cy.location("pathname").should("equal", "/chief-consultant-with-analytical-background-in-performance-management-and-traction-team-2/")
    })

    it('User searches for a job via search bar', () => {
      cy.get('.input')
        .type('Junior .NET')
        .type('{enter}')
      cy.get('.block-jobs__content')
        .contains('Junior .Net Software Engineer in Finance Tribe')
        .click()
      cy.location("pathname").should("equal", "/junior-net-software-engineer-in-finance-tribe/")
    })
  })

})