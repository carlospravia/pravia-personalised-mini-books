# Spec: default-welcome-page

## Purpose

Definir el comportamiento observable de la página default de bienvenida (inglés, sin imagen).

## Requirements

### Requirement: Default welcome content

The system MUST show an English welcome for Pravia's Mini-Books when the visitor has no valid personalization context (missing or invalid `code`).

#### Scenario: Visit without code

- **GIVEN** the visitor opens the site root without a `code` query parameter
- **WHEN** the page loads
- **THEN** the page MUST show a welcome headline that mentions Pravia's Mini-Books
- **AND** the page MUST instruct the visitor to scan the QR code on the back of their Mini-Book to receive their prize
- **AND** the page MUST NOT display a classmate gift image

#### Scenario: Visit with invalid code

- **GIVEN** the visitor opens the site with `?code=` set to a value not in the published codes map
- **WHEN** the page loads
- **THEN** the page MUST show the same default welcome experience as without a code
- **AND** the page MUST NOT list valid codes or classmate names from the map

### Requirement: No CTA

The default page MUST NOT include call-to-action buttons, forms, or navigation beyond reading the message.

#### Scenario: No interactive CTAs

- **GIVEN** the default welcome page is displayed
- **WHEN** the visitor views the page
- **THEN** there MUST be no primary action button requiring a click to continue
- **AND** there MUST be no form inputs

### Requirement: English product UI

All visitor-visible copy on the default page MUST be English.

#### Scenario: Language

- **GIVEN** the default welcome page is displayed
- **WHEN** the visitor reads the headline and body
- **THEN** the text MUST be in English
