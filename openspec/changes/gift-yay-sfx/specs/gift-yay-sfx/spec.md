# Spec: gift-yay-sfx

## Requirements

### Requirement: Valid code attempts yay SFX

The system MUST attempt to play the local one-shot sound `./audio/yay.mp3` when a valid `?code=` shows the personalized gift view.

#### Scenario: Valid gift view plays or unlocks yay

- **GIVEN** a published entry with a valid code
- **WHEN** the visitor opens that gift URL
- **THEN** the page MUST attempt to play `./audio/yay.mp3` once (no loop)
- **AND** if autoplay is blocked, the page MUST show a visible English control (e.g. “Tap me!”) that plays the sound on user gesture

### Requirement: Default and invalid stay silent

The system MUST NOT play the yay sound on the default welcome or for an invalid code.

#### Scenario: Missing code

- **GIVEN** the visitor opens `/` without `code`
- **WHEN** the page loads
- **THEN** the yay sound MUST NOT play
- **AND** the tap-to-play control MUST remain hidden

#### Scenario: Invalid code

- **GIVEN** the visitor opens `/?code=NOTREAL`
- **WHEN** the page loads
- **THEN** the yay sound MUST NOT play
- **AND** the tap-to-play control MUST remain hidden
