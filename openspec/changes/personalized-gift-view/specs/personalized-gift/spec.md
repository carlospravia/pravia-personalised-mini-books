# Spec: personalized-gift

## Requirements

### Requirement: Valid code shows gift

The system MUST show a personalized English message and the classmate gift image when `?code=` matches a published entry.

#### Scenario: Valid Mateo code

- **GIVEN** a published entry for Mateo with code `7XDVYZGL` and image `images/ajolote-mateo.png`
- **WHEN** the visitor opens `/?code=7XDVYZGL`
- **THEN** the page MUST display Mateo's personalized message
- **AND** the page MUST display Mateo's gift image
- **AND** the page MUST NOT show the default “scan the QR” instruction as the primary body

### Requirement: Invalid or missing code stays default

#### Scenario: Missing code

- **GIVEN** the visitor opens `/` without `code`
- **WHEN** the page loads
- **THEN** the default welcome MUST be shown
- **AND** no gift image MUST be shown

#### Scenario: Invalid code

- **GIVEN** the visitor opens `/?code=NOTREAL`
- **WHEN** the page loads
- **THEN** the default welcome MUST be shown
- **AND** the UI MUST NOT list valid codes or classmate names from the map
