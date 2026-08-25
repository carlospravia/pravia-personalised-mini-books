# Spec: classmate-codes-qrs

## Purpose

Códigos alfanuméricos por compañero, mapeo versionado, y QRs hacia la URL de Hosting.

## Requirements

### Requirement: Finite code map

The system MUST maintain exactly nine classmate entries, each with a unique alphanumeric `code`, `classmateName`, and `character`.

#### Scenario: Nine unique codes

- **GIVEN** the published codes configuration
- **WHEN** it is inspected
- **THEN** it MUST contain exactly 9 entries
- **AND** each `code` MUST be unique
- **AND** each entry MUST include `classmateName` and `character` derived from the asset naming set

### Requirement: Query parameter shape

Personalized URLs MUST use the query parameter `code`.

#### Scenario: Canonical URL shape

- **GIVEN** a classmate code `ABCD1234`
- **WHEN** a QR or link is generated for Hosting
- **THEN** the URL MUST be `https://personalised-mini-books.web.app/?code=ABCD1234`

### Requirement: QR artifacts

The repository MUST include printable QR images for each of the nine codes pointing at the canonical URL.

#### Scenario: QR files exist

- **GIVEN** codes have been generated
- **WHEN** print artifacts are produced
- **THEN** there MUST be one QR image per classmate code
- **AND** a letter-size sheet layout MUST present the QRs for printing

### Requirement: Codes are opaque

Error and default UI MUST NOT reveal the list of valid codes.

#### Scenario: Invalid code stays quiet

- **GIVEN** an invalid `code` query value
- **WHEN** the default page is shown
- **THEN** the UI MUST NOT enumerate valid codes or classmates
