# Spec: generic-friend-code

## Requirements

### Requirement: Generic Friend code shows gift

The system MUST resolve a published Friend code to the generic English message and the happy-face gift image.

#### Scenario: Valid Friend code

- **GIVEN** a published Friend entry with image `images/happy-face.png`
- **WHEN** the visitor opens `/?code=` with that Friend code
- **THEN** the page MUST show a personalized headline that greets Friend
- **AND** the page MUST show the generic Friend message
- **AND** the page MUST show the happy-face gift image

### Requirement: Existing classmate codes unchanged

#### Scenario: Mateo still resolves

- **GIVEN** Mateo’s published code `7XDVYZGL`
- **WHEN** the visitor opens `/?code=7XDVYZGL`
- **THEN** the page MUST still show Mateo’s message and image

### Requirement: Printable three-up Friend QR sheet

#### Scenario: Sheet has three identical Friend QRs

- **GIVEN** the generic Friend print sheet
- **WHEN** an operator opens `print/generic-friend-qr-sheet.html`
- **THEN** the sheet MUST show three QR codes that encode the same Friend URL
- **AND** each card MUST label the recipient as Friend
